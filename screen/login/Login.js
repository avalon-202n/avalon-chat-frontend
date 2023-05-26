// react
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
// recoil
import { useSetRecoilState } from 'recoil';
import styles from './Style';
// store
import { APIfetch } from '@network/APIfetch';
import { emailState } from '@store/User';

const LoginScreen = ({ navigation, route }) => {
  const setEmail = useSetRecoilState(emailState);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (route.params) {
      login();
      setLoginInfo({ email: route.params.loginInfo.email, password: route.params.loginInfo.password });
    }
  }, []);

  console.log(route);
  const login = async () => {
    try {
      const res = await APIfetch('/login', {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      console.log(loginInfo);
      console.log('login error : ', JSON.stringify(res));
      if (res && res.status === 200) {
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
            <Image source={require('@public/image/eye.png')} style={{ width: 20, height: 20 }} />
          ) : (
            <Image source={require('@public/image/eye-off.png')} style={{ width: 20, height: 20 }} />
          )}
        </Pressable>
      </View>
      <View style={styles.buttonField}>
        <Pressable
          onPress={() => {
            login();
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
