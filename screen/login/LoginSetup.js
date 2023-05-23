// react
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
// custom Component
import styles from './Style';

const LoginSetupScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={require('@public/image/avalonLogo.png')} />
      <View style={styles.loginTextSetup}>
        <View style={styles.loginBtnSetup}>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.loginText}>로그인</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text style={styles.loginText}>회원가입</Text>
        </Pressable>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};

export default LoginSetupScreen;
