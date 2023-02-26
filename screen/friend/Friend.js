// react
import React, { useState } from "react";
import { View, Text, Image } from "react-native";

// custom
import styles from "./Style";

const Friend = () => {
  const [profileName, setProfileName] = useState("이름");
  const [profileMessage, setProfileMessage] = useState("프로필메세지");
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@public/image/user_01.png")}
          style={styles.profileImg}
        />
        <View style={styles.profileInclude}>
          <Text style={styles.profileNameStyle}>{profileName}</Text>
          <Text style={styles.profileMessageStyle}>{profileMessage}</Text>
        </View>
        <View style={styles.InstanceBox}>
          <Text style={styles.InstanceMessage}>인스턴스 메시지</Text>
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
    </View>
  );
};
export default Friend;
