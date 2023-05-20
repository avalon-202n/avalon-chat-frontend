// react
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { photoPathState } from '@store/User';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
// recoil
import { useRecoilState } from 'recoil';
// custom
import styles from './Style';
const ProfileModal = ({ setIsOpen, newUserInfo }) => {
  const [isModal, setIsModal] = useState(true);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [images, setImages] = useState([]);
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null);
  const [photoPath, setPhotoPath] = useRecoilState(photoPathState);
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

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
        setPhotoPath(profileImage);
        images.push(result.assets[0].uri);
        console.log(images);

        await AsyncStorage.setItem('profileImage', result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeImage = () => {
    // let remove = Object.keys(photoPath).pop(); 전역변수사진 삭제
    setPhotoPath('');
  };
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isModal}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require('@public/image/backImg.png')} />
        <View style={styles.buttonContainer}>
          {isProfileEdit ? (
            <View style={styles.editTopView}>
              <Pressable
                onPress={() => {
                  setIsProfileEdit(false);
                  removeImage();
                }}
              >
                <Text style={[styles.editTopText, styles.editTopLeft]}>취소</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                setIsOpen(false);
              }}
            >
              <Image source={require('@public/image/closeButton_white01.png')} style={styles.CloseImage} />
            </Pressable>
          )}
          <Pressable
            onPress={() => {
              navigation.navigate('Setting');
            }}
          >
            {isProfileEdit ? (
              <View style={[styles.editTopView, styles.editTopRight]}>
                <Text style={styles.editTopText}>확인</Text>
              </View>
            ) : (
              <Image source={require('@public/image/setting_black01.png')} style={styles.starImage} />
            )}
          </Pressable>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileContent}>
            <Pressable
              onPress={() => {
                isProfileEdit ? (
                  pickImage()
                ) : (
                  <View>
                    <Carousel
                      width={360}
                      height={720}
                      autoPlay={false}
                      data={images}
                      renderItem={() => (
                        <View
                          style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                          }}
                        ></View>
                      )}
                    />
                  </View>
                );
              }}
            >
              {photoPath !== '' ? (
                <Image style={styles.profileImage} source={{ uri: profileImage }} />
              ) : (
                <Image style={styles.profileImage} source={require('@public/image/pepsi.png')} />
              )}
            </Pressable>
            <Text style={styles.profileName}>{newUserInfo.profileName}</Text>
            <Text style={styles.profileMessage}>{newUserInfo.profileMessage}</Text>
          </View>
        </View>
        <View style={styles.settingLineView} />

        {isProfileEdit ? (
          <View style={styles.bottomContent}></View>
        ) : (
          <View style={styles.bottomContent}>
            <View>
              <Image style={styles.bottomImages} source={require('@public/image/chat_white01.png')} />
              <Text style={styles.bottomfont}>나와의 채팅</Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  setIsProfileEdit(true);
                }}
              >
                <Image style={styles.bottomImages} source={require('@public/image/pencil_white01.png')} />
                <Text style={styles.bottomfont}>프로필 편집</Text>
              </Pressable>
            </View>
            <View>
              <Image style={styles.bottomImages} source={require('@public/image/waterWave_white01.png')} />
              <Text style={styles.bottomfont}>스토리 보드</Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ProfileModal;
