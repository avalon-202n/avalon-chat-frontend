// React
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

import styles from './Style';
const SignupProfileScreen = ({ navigation }) => {
  const [nickName, setNickName] = useState('');
  const [stateMessage, setStateMessage] = useState('');
  const [birthday, setBirthday] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('@public/image/imagePlus.png')} style={{ width: 50, height: 50 }} />
      </View>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='닉네임을 입력하세요'
            onChangeText={(text) => {
              setNickName(text);
            }}
            value={nickName}
          />
          <View style={styles.lineView} />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='상태메세지를 입력해주세요'
            onChangeText={(text) => {
              setStateMessage(text);
            }}
            value={stateMessage}
          />
          <View style={styles.lineView} />
          <TextInput
            style={{ fontSize: 15 }}
            placeholder='생일을 입력해주세요 (예:1999-01-01)'
            onChangeText={(text) => {
              setBirthday(text);
            }}
            value={birthday}
          />
          <View style={styles.lineView} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable
          onPress={() => {
            //유저 정보생성
            navigation.navigate('Login');
            console.log('가입완료');
          }}
        >
          <Text>가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default SignupProfileScreen;
