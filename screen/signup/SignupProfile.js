// React
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Keyboard, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
// recoil
import { useRecoilState } from 'recoil';
// enum
import { SIGNUP } from '@enum/server';
import { userInfo } from '@enum/user';
// network
import { APIfetch } from '@network/APIfetch';
// hash
import bcrypt from 'bcryptjs';
// custom
import styles from './Style';
const SignupProfileScreen = ({ navigation }) => {
  const [nickName, setNickName] = useState('');
  const [stateMessage, setStateMessage] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isValueNoN, setIsValueNoN] = useState(false);
  const [userInfomation, setUserInfomation] = useRecoilState(userInfo);

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardVisible(true);
  });

  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardVisible(false);
  });

  useEffect(() => {
    valueNONCheck();
  }, [nickName, stateMessage, birthday]);
  const valueNONCheck = () => {
    if (nickName !== '' && stateMessage !== '' && birthday !== '') {
      setIsValueNoN(true);
    } else {
      setIsValueNoN(false);
    }
  };
  const signupFunc = async () => {
    const userInfo = Object.assign({
      usernickName: nickName,
      userStateMessage: stateMessage,
      userBirthday: birthday,
      userEmail: userInfomation.userEmail,
      userPassword: userInfomation.userPassword,
      userPhone: userInfomation.userPhone,
    });
    setUserInfomation(userInfo);

    const res = await APIfetch(SIGNUP, {
      email: userInfomation.userEmail,
      password: { value: userInfomation.userPassword },
    });
    const result = await res.json();
    console.log(result);
  };
  useEffect(() => {
    const getStoredImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('profileImage');
        if (storedImage !== null) {
          setProfileImage(storedImage);
        } else {
          setProfileImage(require('@public/image/pepsi.png'));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getStoredImage();
  }, []);
  useEffect(() => {
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handlePress = () => {
    Keyboard.dismiss();
  };
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        setProfileImage(imageUri);
        await AsyncStorage.setItem('profileImage', imageUri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hashAlgorithm = async (password) => {
    //해쉬 알고리즘 보안 패스워드 만들기
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
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
            <Pressable
              onPress={() => {
                pickImage();
              }}
            >
              {/* {profileImage !== null ? (
                <Image source={{ uri: profileImage }} style={styles.isPhotoImage} />
              ) : (
                <Image source={require('@public/image/imagePlus.png')} style={{ width: 30, height: 30 }} />
              )} 
              1.imagepicker define
                2. default style 적용안됨
              */}
              <Image source={require('@public/image/imagePlus.png')} style={styles.defaultPhotoImage} />
            </Pressable>
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
            <Text style={styles.informText}>생년월일</Text>
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
        style={isValueNoN ? styles.assignBtn : styles.assignBtnGray}
        onPress={() => {
          //유저 정보생성
          if (nickName == null) {
            Alert.alert('닉네임을 입력하세요');
          }

          signupFunc();
          navigation.navigate('Login');
        }}
      >
        <Text style={styles.assignBtnText}>가입하기</Text>
      </Pressable>
    </Pressable>
  );
};
export default SignupProfileScreen;
