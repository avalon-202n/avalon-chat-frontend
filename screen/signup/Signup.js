// React
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
//recoil
import { useSetRecoilState } from 'recoil';
// store
import { profileMessageState } from '@store/User';
const SignupScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [secPassword, secSetPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isSecPassword, setIsSecPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const userId = useSetRecoilState(profileMessageState);

  useEffect(() => {
    passwordCheck();
  }, [password]);
  useEffect(() => {
    secPasswordCheck();
  }, [secPassword]);
  const passwordCheck = () => {
    if (password.length >= 8) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };
  const secPasswordCheck = () => {
    if (password === secPassword) {
      setIsSecPassword(true);
    } else {
      setIsSecPassword(false);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={{ flex: 1.3, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
          <Text>아이디 :</Text>
          <Text>비밀번호 :</Text>
          <Text>비밀번호 확인:</Text>
          <Text>휴대폰 번호:</Text>
        </View>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            placeholder='아이디를 입력하세요'
            onChangeText={(text) => {
              setEmail(text);
            }}
            value={email}
          />
          <TextInput
            placeholder='비밀번호를 입력하세요'
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
            secureTextEntry={true}
            maxLength={10}
          />
          <TextInput
            placeholder='비밀번호를 한번 더 입력하세요'
            onChangeText={(text) => {
              secSetPassword(text);
            }}
            value={secPassword}
            secureTextEntry={true}
            maxLength={10}
          />
          <TextInput
            placeholder='핸드폰 번호를 입력하세요.'
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            value={phoneNumber}
            maxLength={12}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
          <Pressable
            onPress={() => {
              console.log('아이디확인');
            }}
          >
            <Text>아이디 확인</Text>
          </Pressable>
          {isPassword ? <Text>OK</Text> : <Text style={{ color: 'red' }}>No</Text>}
          {isSecPassword ? <Text>OK</Text> : <Text style={{ color: 'red' }}>No</Text>}
          <Pressable
            onPress={() => {
              Alert.alert('인증번호가 발송되었습니다.');
              //파이어베이스 or AWS 연동여부
              //파이어베이스(10,000건까지무료) AWS 40바이트 기준으로 대략 30원.
            }}
          >
            <Text>인증하기</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>가입하기</Text>
      </View>
    </View>
  );
};
export default SignupScreen;
