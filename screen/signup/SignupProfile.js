// React
import React, { useEffect, useState } from 'react';
import { Image, Keyboard, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import styles from './Style';
const SignupProfileScreen = ({ navigation }) => {
  const [nickName, setNickName] = useState('');
  const [stateMessage, setStateMessage] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardVisible(true);
  });

  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardVisible(false);
  });

  useEffect(() => {
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <Pressable
      onPress={() => {
        handlePress();
      }}
      style={styles.container}
    >
      <ScrollView style={styles.defineView}>
        {!isKeyboardVisible ? (
          <View style={styles.photoView}>
            <Image source={require('@public/image/imagePlus.png')} style={styles.photoImage} />
          </View>
        ) : null}
        <View style={isKeyboardVisible ? { ...styles.withoutKeyboard } : null}>
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
            keyboardType='numbers-and-punctuation'
            onChangeText={(text) => {
              setBirthday(text);
            }}
            value={birthday}
          />
        </View>
      </ScrollView>

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
    </Pressable>
  );
};
export default SignupProfileScreen;
