// react
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ImageBackground, Image, Pressable, Text, View } from 'react-native';
// custom Component
import styles from './Style';
import backgroundImage from '../../public/image/background.png';

const LoginSetupScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.container}>
      <View>
        <Text style={styles.title}>AVALON</Text>
      </View>
      <View style={styles.loginTextSetup}>
        <View style={styles.loginButton}>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.loginText}>로그인</Text>
          </Pressable>
        </View>
        <View style={styles.signUpButton}>
          <Pressable
            onPress={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text style={styles.loginText}>회원가입</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style='dark' />
    </ImageBackground>
  );
};

export default LoginSetupScreen;
