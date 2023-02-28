// react
import React from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";

// custom
import styles from "./Style";
const ProfileEditModal = ({
  isOpenProfile,
  setIsOpenProfile,
  instanceMessage,
  profileName,
  profileMessage,
}) => {
  console.log("ProfileEditModal");

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
                setIsOpenProfile(false);
              }}
            >
              {/* 뒤로가기버튼 
              <Image
                source={require("@public/image/closeButton_white01.png")}
                style={styles.CloseImage}
              /> */}
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("완료");
              }}
            >
              {/* 완료버튼 
              <Image
                source={require("@public/image/star_white01.png")}
                style={styles.starImage}
              /> */}
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
              <Image
                style={styles.profileImage}
                source={require("@public/image/coke_01.png")}
              />
              <Text style={styles.profileName}>{profileName}</Text>
              <Text style={styles.profileMessage}>{profileMessage}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileEditModal;
