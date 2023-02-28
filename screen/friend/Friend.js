// react
import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

// custom
import styles from "./Style";
import { ProfileModal } from "@component/Common";
const Friend = () => {
  const [profileName, setProfileName] = useState("이름");
  const [profileMessage, setProfileMessage] = useState("프로필메세지");
  const [instanceMessage, setInstanceMessage] = useState("인스턴스 메세지");
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            setIsOpenProfile(!isOpenProfile);
          }}
        >
          <Image
            source={require("@public/image/coke_01.png")}
            style={styles.profileImg}
          />
        </Pressable>
        <View style={styles.profileInclude}>
          <Text style={styles.profileName}>{profileName}</Text>
          <Text style={styles.profileMessage}>{profileMessage}</Text>
        </View>
        <View style={styles.InstanceBox}>
          <Text style={styles.InstanceMessage}>{instanceMessage}</Text>
        </View>
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
          instanceMessage={instanceMessage}
          profileMessage={profileMessage}
          profileName={profileName}
        />
      )}
    </View>
  );
};
export default Friend;
