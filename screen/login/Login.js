// react
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
// recoil
import { useSetRecoilState } from 'recoil';
import styles from './Style';
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
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.loginTitle}>AVALON</Text>
      </View>
      <View style={styles.textField}>
        <TextInput style={styles.textInput} placeholder='아이디를 입력해주세요' autoComplete='email' />
      </View>
      <View style={styles.textField}>
        <TextInput style={styles.textInput} placeholder='비밀번호를 입력해주세요.' />
      </View>
      <View style={styles.buttonField}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.button}
        >
          <Text style={{ textAlign: 'center' }}>로그인</Text>
        </Pressable>
      </View>
      <View style={styles.linkFiled}>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={styles.link}
          >
            <Text>회원가입</Text>
          </Pressable>
        </View>
        <View style={styles.findAccountLink}>
          <Pressable style={styles.link}>
            <Text>아이디 찾기</Text>
          </Pressable>
          <Pressable style={styles.link}>
            <Text>비밀번호 찾기</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};

export default LoginScreen;
