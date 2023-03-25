// react
import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// recoil
import { useRecoilValue } from "recoil";
// custom
import styles from "./Style";
import {
  ProfileModal,
  ProfileImageModal,
  ProfileEditModal,
} from "@component/Common";
// enum
import { photoPathState } from "@store/User";

const Friend = () => {
  const [profileName, setProfileName] = useState("이름");
  const [profileMessage, setProfileMessage] = useState("프로필메세지");
  const [isOpenProfile, setIsOpenProfile] = useState(false); //ProfileModal
  const [isProfileEdit, setIsProfileEdit] = useState(false); //ProfileEditModal
  const [isProfileImage, setIsProfileImage] = useState(false); //ProfileImageModal

  const photoPath = useRecoilValue(photoPathState);
  const navigation = useNavigation();
  console.log(photoPath);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => {
              setIsOpenProfile(true);
            }}
          >
            {photoPath !== "" ? (
              <Image source={{ uri: photoPath }} style={styles.profileImg} />
            ) : (
              <Image
                source={require("@public/image/coke_01.png")}
                style={styles.profileImg}
              />
            )}

            <View style={styles.profileInclude}>
              <Text style={styles.profileName}>{profileName}</Text>
              <Text style={styles.profileMessage}>{profileMessage}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.settingLineView} />
        <View>
          <Text style={styles.contentText}>즐겨 찾기</Text>
        </View>
        <View style={styles.settingLineView} />
        <View>
          <Text style={styles.contentText}>생일자</Text>
        </View>
        <View style={styles.settingLineView} />
        <View>
          <Text style={styles.contentText}>친구목록</Text>
        </View>
        {isOpenProfile === true && (
          <ProfileModal
            setIsOpenProfile={setIsOpenProfile}
            isOpenProfile={isOpenProfile}
            profileMessage={profileMessage}
            profileName={profileName}
            isProfileEdit={isProfileEdit}
            setIsProfileEdit={setIsProfileEdit}
            isProfileImage={isProfileImage}
            setIsProfileImage={setIsProfileImage}
          />
        )}
      </ScrollView>
      <View style={styles.bottomContent}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Pressable
            onPress={() => {
              console.log("친구");
            }}
          >
            <Image
              onPress={() => {
                console.log("친구");
              }}
              source={require("@public/image/user_black01.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Chat");
            }}
          >
            <Image
              source={require("@public/image/chat_black01.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Setting");
            }}
          >
            <Image
              source={require("@public/image/more_black01.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Friend;
