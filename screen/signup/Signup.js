// React
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
//recoil
import { useSetRecoilState } from 'recoil';
// store
import { profileMessageState } from '@store/User';
import styles from './Style';
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secPassword, secSetPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isSecPassword, setIsSecPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberCheck, setnumberCheck] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [isRandomNumberPass, setIsRandomNumberPass] = useState(false);
  const userId = useSetRecoilState(profileMessageState);

  useEffect(() => {
    passwordCheck();
  }, [password]);
  useEffect(() => {
    secPasswordCheck();
  }, [secPassword]);
  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);
  const passwordCheck = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{7,}$/;
    const isValid = regex.test(password);
    if (isValid) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
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

  const RandomNumber = () => {
    const number = Math.floor(Math.random() * 10000) * 9;
    setRandomNumber(number);
  };
  const checkRandomNumber = () => {
    if (numberCheck == randomNumber) {
      Alert.alert('인증되었습니다.');
      setIsRandomNumberPass(true);
    } else {
      Alert.alert('인증번호를 확인하세요.');
      setIsRandomNumberPass(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='아이디를 입력하세요'
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
            maxLength={12}
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
              console.log('아이디확인');
            }}
          >
            <Text style={styles.checkText}>아이디 확인</Text>
          </Pressable>
          {isPassword ? <Text style={styles.checkText}>OK</Text> : <Text style={[styles.checkText]}>No</Text>}
          {isSecPassword ? <Text style={styles.checkText}>OK</Text> : <Text style={styles.checkText}>No</Text>}
          <Pressable
            onPress={() => {
              RandomNumber();
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
            } else if (isRandomNumberPass === false) {
              Alert.alert('인증번호를 확인하세요');
            } else {
              //유저 정보생성
              navigation.goBack();
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
