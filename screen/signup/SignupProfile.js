// React
import React, { useEffect, useState } from 'react';
import { Image, Keyboard, Pressable, Text, TextInput, View } from 'react-native';

import styles from './Style';
const SignupProfileScreen = ({ navigation }) => {
  const [nickName, setNickName] = useState('');
  const [stateMessage, setStateMessage] = useState('');
  const [birthday, setBirthday] = useState('');

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    console.log('Keyboard appeared');
  });

  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    console.log('Keyboard hidden');
  });

  const isKeyboardVisible = Keyboard.isVisible;

  useEffect(() => {}, [isKeyboardVisible]);
  return (
    <View style={styles.container}>
      <View style={styles.defineView}>
        {isKeyboardVisible ? (
          <View style={styles.photoView}>
            <Image source={require('@public/image/imagePlus.png')} style={styles.photoImage} />
          </View>
        ) : null}
        <View style={styles.informView}>
          <Text style={styles.informText}>닉네임</Text>
        </View>
        <TextInput
          style={styles.inputProfileText}
          placeholder='닉네임을 입력하세요'
          onChangeText={(text) => {
            setNickName(text);
          }}
          value={nickName}
        />
        <View style={styles.informView}>
          <Text style={styles.informText}>상태메세지</Text>
        </View>
        <TextInput
          style={styles.inputProfileText}
          placeholder='자신의 상태를 알려주세요'
          onChangeText={(text) => {
            setStateMessage(text);
          }}
          value={stateMessage}
        />
        <View style={styles.informView}>
          <Text style={styles.informText}>아이디</Text>
        </View>
        <TextInput
          style={styles.inputProfileText}
          placeholder='생일을 입력해주세요 (예:19990101)'
          onChangeText={(text) => {
            setBirthday(text);
          }}
          value={birthday}
        />
      </View>

      <Pressable
        style={styles.assignBtn}
        onPress={() => {
          //유저 정보생성
          navigation.navigate('Login');
          console.log('가입완료');
        }}
      >
        <Text style={styles.assignBtnText}>가입하기</Text>
      </Pressable>
    </View>
  );
};
export default SignupProfileScreen;
