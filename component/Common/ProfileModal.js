// react
import React, { useState } from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// custom
import styles from "./Style";
import ProfileEditModal from "@component/Common/ProfileEditModal";
const ProfileModal = ({
  setIsOpenProfile,
  isOpenProfile,
  instanceMessage,
  profileName,
  profileMessage,
}) => {
  const navigation = useNavigation();
  const [isProfileEdit, setIsProfileEdit] = useState(false);
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
              <Image
                source={require("@public/image/closeButton_white01.png")}
                style={styles.CloseImage}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("즐겨찾기");
              }}
            >
              <Image
                source={require("@public/image/star_white01.png")}
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
              <Image
                style={styles.profileImage}
                source={require("@public/image/coke_01.png")}
              />
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
                  console.log("프로필 편집");
                  setIsProfileEdit(!isProfileEdit);
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
      {!isProfileEdit && (
        <ProfileEditModal
          isOpenProfile={isOpenProfile}
          setIsOpenProfile={setIsOpenProfile}
          instanceMessage={instanceMessage}
          profileName={profileName}
          profileMessage={profileMessage}
        />
      )}
    </View>
  );
};

export default ProfileModal;
