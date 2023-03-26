// react
import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// custom
import styles from "./Style";
import {
  ProfileModal,
  ProfileImageModal,
  ProfileEditModal,
} from "@component/Common";

const FriendScreen = () => {
  const [profileName, setProfileName] = useState("이름");
  const [profileMessage, setProfileMessage] = useState("프로필메세지");
  const [instanceMessage, setInstanceMessage] = useState("인스턴스 메세지");
  const [isOpenProfile, setIsOpenProfile] = useState(false); //ProfileModal
  const [isProfileEdit, setIsProfileEdit] = useState(false); //ProfileEditModal
  const [isProfileImage, setIsProfileImage] = useState(false); //ProfileImageModal
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <Pressable
          style={{ flexDirection: "row" }}
          onPress={() => {
            setIsOpenProfile(true);
          }}
        >
          <Image
            source={require("@public/image/coke_01.png")}
            style={styles.profileImg}
          />

          <View style={styles.profileInclude}>
            <Text style={styles.profileName}>{profileName}</Text>
            <Text style={styles.profileMessage}>{profileMessage}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.settingLineView} />
      <View>
        <Text style={styles.contentText}>즐겨 찾기</Text>
        {
          <Pressable
            onPress={() => {
              console.log("즐겨찾기 친구");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("@public/image/pepsi.png")}
                style={styles.profileImg}
              />
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text>즐겨찾기이름</Text>
                <Text>즐겨찾기프로필메세지</Text>
              </View>
            </View>
          </Pressable>
        }
      </View>

      <View style={styles.settingLineView} />
      <View>
        <Text style={styles.contentText}>친구목록</Text>
      </View>
      {isOpenProfile === true && (
        <ProfileModal
          setIsOpenProfile={setIsOpenProfile}
          isOpenProfile={isOpenProfile}
          instanceMessage={instanceMessage}
          profileMessage={profileMessage}
          profileName={profileName}
          isProfileEdit={isProfileEdit}
          setIsProfileEdit={setIsProfileEdit}
          isProfileImage={isProfileImage}
          setIsProfileImage={setIsProfileImage}
        />
      )}
    </ScrollView>
  );
};
export default FriendScreen;
