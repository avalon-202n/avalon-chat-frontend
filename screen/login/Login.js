// react
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
// recoil
import { useSetRecoilState } from 'recoil';
import styles from './Style';
//enum
import { LOGIN } from '@enum/server';
// network
import { APIfetch } from '@network/APIfetch';
// store
import { emailState } from '@store/User';
// util
import * as Storage from '@util/Storage.js';
const LoginScreen = ({ navigation }) => {
  const setEmail = useSetRecoilState(emailState);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const checkPreviousLogin = async () => {
      const savedLoginInfo = await Storage.loadLoginInfo();
      if (savedLoginInfo && savedLoginInfo.email && savedLoginInfo.password) {
        setLoginInfo(savedLoginInfo);
        login(savedLoginInfo);
      }
    };

    checkPreviousLogin();
  }, []);
  const login = async (info) => {
    try {
      const res = await APIfetch(LOGIN, {
        email: info.email,
        password: info.password,
      });

      if (res && res.status === 200) {
        setEmail(info.email);
        const result = await res.json();
        await Storage.setToken('accessToken', result.accessToken);
        await Storage.setToken('refreshToken', result.refreshToken);

        navigation.navigate('Home');
      } else {
        Alert.alert('입력하신 정보를 다시 확인해주세요.');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = () => {
    if (!loginInfo.email || !loginInfo.password) {
      Alert.alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    login(loginInfo);
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
          secureTextEntry={passwordVisible}
          value={loginInfo.password}
          onChangeText={(e) => {
            setLoginInfo({
              email: loginInfo.email,
              password: e,
            });
          }}
        />
        <Pressable
          onPress={() => {
            setPasswordVisible(!passwordVisible);
          }}
          style={styles.eyeIcon}
        >
          {passwordVisible ? (
            <Image source={require('@public/image/eye.png')} style={styles.eyeIconImage} />
          ) : (
            <Image source={require('@public/image/eye-off.png')} style={styles.eyeIconImage} />
          )}
        </Pressable>
      </View>
      <View style={styles.buttonField}>
        <Pressable
          onPress={() => {
            handleLogin();
          }}
          style={styles.button}
        >
          <Text style={{ textAlign: 'center', color: '#fff' }}>로그인</Text>
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
