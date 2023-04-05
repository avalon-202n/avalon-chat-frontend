// react
import React, { useState, useEffect } from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
// recoil
import { useRecoilState } from "recoil";
// custom
import styles from "./Style";
// enum
import { S3_URL_PROFILE } from "@enum/cloud";
import { photoPathState } from "@store/User";
// network
import { APIfetch, APIfetchMedia } from "@network/APIfetch";
const ProfileEditModal = ({ route }) => {
  const navigation = useNavigation();
  const profile = route.params;

  const [profileImage, setProfileImage] = useState(null);
  const [photoPath, setPhotoPath] = useRecoilState(photoPathState);

  useEffect(() => {
    const getStoredImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem("profileImage");
        if (storedImage !== null) {
          setProfileImage(storedImage);
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
        setPhotoPath(result.assets[0].uri);
        await AsyncStorage.setItem("profileImage", result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={profile.isOpenProfile}
        onRequestClose={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require("@public/image/backImg.png")}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => {
                navigation.goBack();
                //ProfileModal 이동으로 수정해야함.
              }}
            >
              <Image
                source={require("@public/image/closeButton_white01.png")}
                style={styles.CloseImage}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Setting");
              }}
            >
              <Image
                source={require("@public/image/setting_black01.png")}
                style={styles.starImage}
              />
            </Pressable>
          </View>
          <View style={styles.profileContainer}>
            <View style={styles.profileContent}>
              <Pressable
                onPress={() => {
                  pickImage();
                }}
              >
                {profileImage ? (
                  <Image
                    style={styles.profileImage}
                    source={{ uri: profileImage }}
                  />
                ) : (
                  <Image
                    style={styles.profileImage}
                    source={require("@public/image/coke_01.png")}
                  />
                  //기본이미지
                )}
              </Pressable>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.profileName}>{profile.profileName}</Text>
              </View>
              <Text style={styles.profileMessage}>
                {profile.profileMessage}
              </Text>
            </View>
          </View>
          <View style={styles.settingLineView} />
          <View style={styles.bottomContent}></View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileEditModal;
