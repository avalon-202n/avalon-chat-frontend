// React
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
// custom
import styles from './Style';
const SignupProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [stateMessage, setStateMessage] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isBirthday, setIsBirthday] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isValueNoN, setIsValueNoN] = useState(false);

  const [userInfomation, setUserInfomation] = useRecoilState(userInfo);

  useEffect(() => {
    valueNONCheck();
  }, [name, stateMessage, birthday]);
  const valueNONCheck = () => {
    if (name !== '' && stateMessage !== '' && isBirthday) {
      setIsValueNoN(true);
    } else {
      setIsValueNoN(false);
    }
  };

  useEffect(() => {
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    birthCheck();
  }, [birthday]);

  const signupFunc = async () => {
    try {
      const userInfo = Object.assign({
        userName: name,
        userStateMessage: stateMessage,
        userBirthday: birthday,
        userEmail: userInfomation.userEmail,
        userPassword: userInfomation.userPassword,
        userPhone: userInfomation.userPhone,
        userImage: userInfomation.profileImage,
      });
      setUserInfomation(userInfo);
      await APIfetch(SIGNUP, {
        email: userInfomation.userEmail,
        password: userInfomation.userPassword,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const birthCheck = () => {
    if (birthday.length === 8) {
      const formattedBirthday = birthday.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
      setBirthday(formattedBirthday);
      setIsBirthday(true);
    }
  };

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardVisible(true);
  });

  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardVisible(false);
  });
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
        const newUserInfo = {
          ...userInfomation,
          profileImage: [imageUri],
        };
        setUserInfomation(newUserInfo);
      } else {
        const newUserInfo = {
          ...userInfomation,
          profileImage: null,
        };
        setUserInfomation(newUserInfo);
      }
    } catch (error) {
      console.log(error);
    }
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
              {userInfomation.profileImage !== undefined ? (
                <View style={styles.photoImageView}>
                  <Image source={userInfomation.profileImage} style={styles.photoImage} />
                </View>
              ) : (
                <View style={styles.photoImageView}>
                  <Image source={require('@public/image/imagePlus.png')} style={styles.nonPhotoImage} />
                </View>
              )}
            </Pressable>
          </View>
        ) : null}
        <View style={isKeyboardVisible ? { ...styles.withoutKeyboard } : null}>
          <View style={styles.informView}>
            <Text style={styles.informText}>이름</Text>
          </View>
          <TextInput
            style={styles.inputProfileText}
            placeholder='이름을 입력하세요'
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
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
        style={isValueNoN ? styles.signBtn : styles.signBtnGray}
        onPress={() => {
          //유저 정보생성
          if (name == null) {
            Alert.alert('이름을 입력하세요');
          }
          signupFunc();
          navigation.reset({ routes: [{ name: 'Login' }] });
        }}
      >
        <Text style={styles.signBtnText}>가입하기</Text>
      </Pressable>
    </Pressable>
  );
};
export default SignupProfileScreen;
