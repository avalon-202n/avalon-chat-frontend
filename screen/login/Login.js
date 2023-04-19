// react
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
// recoil
import { useSetRecoilState } from 'recoil';
// store
import { emailState, phoneNumberState, profileMessageState } from '@store/User';
const LoginScreen = ({ navigation, route }) => {
  const setEmail = useSetRecoilState(emailState);
  const setProfileMessage = useSetRecoilState(profileMessageState);
  const setPhoneNumber = useSetRecoilState(phoneNumberState);

  const [loginInfo, setLoginInfo] = useState({});

  const tempLoginInfo = useRef({});

  const login = async (email, password) => {
    const loginInfo = { loginId: email, loginPw: password };
    //storage id, pw 저장후 임시로 저장
  };
  useEffect(() => {
    login();
    if (route.params) {
    }
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text>아이디 입력:</Text>
        <TextInput placeholder='아이디를 입력하세요' />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>비밀번호 입력:</Text>
        <TextInput placeholder='비밀번호를 입력하세요.' />
      </View>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            marginLeft: 5,
            backgroundColor: 'pink',
            width: 70,
            height: 50,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center' }}>로그인</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Signup');
          }}
          style={{
            marginLeft: 5,
            backgroundColor: 'pink',
            width: 70,
            height: 50,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center' }}>회원가입</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={{ marginLeft: 5 }}>
          <Text>아이디 찾기</Text>
        </Pressable>
        <Pressable style={{ marginLeft: 5 }}>
          <Text>비밀번호 찾기</Text>
        </Pressable>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};

export default LoginScreen;
