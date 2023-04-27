// React
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
//recoil
import { useSetRecoilState } from 'recoil';
// store
import { profileMessageState } from '@store/User';
// enum
import { SIGNUP_EMAIL_DUPULICATED, SIGNUP_PHONE_CHECK, SIGNUP_PHONE_SEND } from '@enum/server';
// network
import { APIfetch } from '@network/APIfetch';
import styles from './Style';
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secPassword, secSetPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isSecPassword, setIsSecPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberCheck, setnumberCheck] = useState('');

  const userId = useSetRecoilState(profileMessageState);

  useEffect(() => {
    passwordCheck();
  }, [password]);
  useEffect(() => {
    secPasswordCheck();
  }, [secPassword]);

  useEffect(() => {
    formatPhoneNumber();
  }, [phoneNumber]);
  const passwordCheck = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{7,}$/;
    const isValid = regex.test(password);
    if (isValid) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  const emailCheck = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
      const res = await APIfetch(SIGNUP_EMAIL_DUPULICATED, { email });
      const result = await res.json();

      if (result.duplicated === false) {
        Alert.alert('사용가능합니다.');
      } else {
        Alert.alert('사용할 수 없는 아이디입니다.');
      }
    } else {
      Alert.alert('이메일 형식이 아닙니다');
    }
  };

  const secPasswordCheck = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{7,}$/;
    const isValid = regex.test(secPassword);
    if (password === secPassword && isValid) {
      setIsSecPassword(true);
    } else {
      setIsSecPassword(false);
    }
  };

  const formatPhoneNumber = () => {
    const formatNumber = phoneNumber.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
    if (formatNumber) {
      setPhoneNumber(formatNumber);
    }
  };
  const checkRandomNumber = async () => {
    console.log(numberCheck);
    const res = await APIfetch(SIGNUP_PHONE_CHECK, { phoneNumber, numberCheck });

    const result = await res.json();
    console.log(result);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='이메일을 입력하세요'
            onChangeText={(text) => {
              setEmail(text);
            }}
            value={email}
          />
          <View style={styles.lineView} />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder={`비밀번호를 입력하세요(7자 이상,특수문자포함)`}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
            secureTextEntry={true}
            maxLength={12}
          />
          <View style={styles.lineView} />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='비밀번호를 한번 더 입력하세요'
            onChangeText={(text) => {
              secSetPassword(text);
            }}
            value={secPassword}
            secureTextEntry={true}
            maxLength={12}
          />

          <View style={styles.lineView} />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='핸드폰 번호를 입력하세요.'
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            value={phoneNumber}
            maxLength={13}
          />
          <View style={styles.lineView} />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='인증번호를 입력하세요.'
            onChangeText={(text) => {
              setnumberCheck(text);
            }}
            value={numberCheck}
            maxLength={6}
          />
          <View style={styles.lineView} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Pressable
            onPress={() => {
              {
                emailCheck();
              }
            }}
          >
            <Text style={styles.checkText}>이메일 확인</Text>
          </Pressable>
          {isPassword ? <Text style={styles.checkText}>OK</Text> : <Text style={[styles.checkText]}>No</Text>}
          {isSecPassword ? <Text style={styles.checkText}>OK</Text> : <Text style={styles.checkText}>No</Text>}
          <Pressable
            onPress={() => {
              Alert.alert('인증번호를 보냈습니다');
              APIfetch(SIGNUP_PHONE_SEND, phoneNumber);
            }}
          >
            <Text style={styles.checkText}>인증하기</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              checkRandomNumber();
            }}
          >
            <Text style={styles.checkText}>확인하기</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable
          onPress={() => {
            if (isPassword === false || isSecPassword === false) {
              Alert.alert('비밀번호를 확인하세요');
            } else {
              //유저 정보생성
              navigation.navigate('SignProfile');
              console.log('가입완료');
            }
          }}
        >
          <Text>가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default SignupScreen;
