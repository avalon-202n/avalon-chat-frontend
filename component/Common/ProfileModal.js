// react
import React, { useState } from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
// recoil
import { useRecoilValue } from "recoil";
// custom
import styles from "./Style";
// store
import { photoPathState } from "@store/User";
const ProfileModal = ({
  setIsOpenProfile,
  isOpenProfile,
  profileName,
  profileMessage,
}) => {
  const navigation = useNavigation();
  const photoPath = useRecoilValue(photoPathState);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpenProfile}
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
                setIsOpenProfile(!isOpenProfile);
              }}
            >
              <Image
                source={require("@public/image/closeButton_white01.png")}
                style={styles.CloseImage}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setIsOpenProfile(!isOpenProfile);
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
                  <Carousel
                    loop
                    width={300}
                    height={150}
                    autoPlay={false}
                    data={[...new Array(6).keys()]}
                    onSnapToItem={(index) =>
                      console.log("current index:", index)
                    }
                    renderItem={({ index }) => (
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Text>{index}</Text>
                      </View>
                    )}
                  />;

                  //ProfileModal close and then ProfileImageModal open
                }}
              >
                <Image
                  style={styles.profileImage}
                  source={{ uri: photoPath }}
                />
              </Pressable>
              <Text style={styles.profileName}>{profileName}</Text>
              <Text style={styles.profileMessage}>{profileMessage}</Text>
            </View>
          </View>
          <View style={styles.settingLineView} />
          <View style={styles.bottomContent}>
            <View>
              <Image
                style={styles.bottomImages}
                source={require("@public/image/chat_white01.png")}
              />
              <Text style={styles.bottomfont}>나와의 채팅</Text>
            </View>
            <View>
              <Pressable
                onPress={() => {
                  setIsOpenProfile(!isOpenProfile);
                  navigation.navigate("ProfileEditModal", {
                    profileName: profileName,
                    profileMessage: profileMessage,
                    isOpenProfile: isOpenProfile,
                    setIsOpenProfile: setIsOpenProfile,
                  });
                }}
              >
                <Image
                  style={styles.bottomImages}
                  source={require("@public/image/pencil_white01.png")}
                />
                <Text style={styles.bottomfont}>프로필 편집</Text>
              </Pressable>
            </View>
            <View>
              <Image
                style={styles.bottomImages}
                source={require("@public/image/waterWave_white01.png")}
              />
              <Text style={styles.bottomfont}>목록1</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileModal;
