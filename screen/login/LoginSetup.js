// react
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
// custom Component
// enum

const LoginSetupScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ width: 350, height: 200 }} source={require('@public/image/avalonLogo.png')} />

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <View style={{ marginRight: 10 }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text>로그인</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text>회원가입</Text>
        </Pressable>
      </View>
      <StatusBar style='dark' />
    </View>
  );
};

export default LoginSetupScreen;
