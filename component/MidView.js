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
// screen
import { FriendScreen } from "@screen/friend";
import { ChatScreen } from "@screen/chat";
import { SettingScreen } from "@screen/setting";

// enum
import { contents } from "@enum/state";
const MidView = ({ bottomContents }) => {
  const [profileName, setProfileName] = useState("이름");
  const [profileMessage, setProfileMessage] = useState("프로필메세지");
  const [instanceMessage, setInstanceMessage] = useState("인스턴스 메세지");
  const [isOpenProfile, setIsOpenProfile] = useState(false); //ProfileModal
  const [isProfileEdit, setIsProfileEdit] = useState(false); //ProfileEditModal
  const [isProfileImage, setIsProfileImage] = useState(false); //ProfileImageModal

  return (
    <View style={{ flex: 1 }}>
      {bottomContents === contents.friend && <FriendScreen />}
      {bottomContents === contents.chat && <ChatScreen />}
      {bottomContents === contents.setting && <SettingScreen />}
    </View>
  );
};
export default MidView;
