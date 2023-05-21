// react
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View, Alert } from 'react-native';
// recoil
import { useSetRecoilState } from 'recoil';
import styles from './Style';
// store
import { emailState, phoneNumberState, profileMessageState } from '@store/User';
import { APIfetch } from '@network/APIfetch';

const LoginScreen = ({ navigation, route }) => {
  const setEmail = useSetRecoilState(emailState);
  const setProfileMessage = useSetRecoilState(profileMessageState);
  const setPhoneNumber = useSetRecoilState(phoneNumberState);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      const res = await APIfetch('/login', {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      if (res.status === 200) {
        setEmail(loginInfo.email);
        navigation.navigate('Home');
      } else {
        setLoginInfo({
          email: '',
          password: '',
        });
        Alert.alert('입력하신 정보를 다시 확인해주세요.');
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.loginTitle}>AVALON</Text>
      </View>
      <View style={styles.textField}>
        <TextInput
          style={styles.textInput}
          placeholder='아이디를 입력해주세요'
          autoComplete='email'
          value={loginInfo.email}
          onChangeText={(e) => {
            setLoginInfo({
              email: e,
              password: loginInfo.password,
            });
          }}
        />
      </View>
      <View style={styles.textField}>
        <TextInput
          style={styles.textInput}
          placeholder='비밀번호를 입력해주세요.'
          value={loginInfo.password}
          onChangeText={(e) => {
            setLoginInfo({
              email: loginInfo.email,
              password: e,
            });
          }}
        />
      </View>
      <View style={styles.buttonField}>
        <Pressable
          onPress={() => {
            login();
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
          <Pressable
            onPress={() => {
              navigation.navigate('FindId');
            }}
            style={styles.link}
          >
            <Text>아이디 찾기</Text>
          </Pressable>
          <Pressable
            style={styles.link}
            onPress={() => {
              navigation.navigate('FindPw');
            }}
          >
            <Text>비밀번호 찾기</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};

export default LoginScreen;
