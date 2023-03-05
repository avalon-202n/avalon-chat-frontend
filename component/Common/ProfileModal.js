// react
import React, { useState } from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
// custom
import styles from "./Style";
const ProfileModal = ({
  setIsOpenProfile,
  isOpenProfile,
  instanceMessage,
  profileName,
  profileMessage,
  setIsProfileEdit,
  isProfileEdit,
  isProfileImage,
  setIsProfileImage,
}) => {
  const navigation = useNavigation();

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
              <View style={styles.instanceMessageBox}>
                <Text style={{ fontSize: 15 }}>
                  {instanceMessage.length < 80
                    ? instanceMessage
                    : instanceMessage.slice(0, 85)}
                </Text>
              </View>
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
                  console.log("open Profile image");
                }}
              >
                <Image
                  style={styles.profileImage}
                  source={require("@public/image/coke_01.png")}
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
                  // setIsOpenProfile(false);
                  // setIsProfileEdit(true);
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
              <Text style={styles.bottomfont}>인스턴스</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileModal;
