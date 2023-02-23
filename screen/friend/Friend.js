// react
import React from "react";
import { View, Text, Image } from "react-native";

// custom
import styles from "./Style";

const Friend = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={require("@public/image/user_01.png")} style={{ width: 30, height: 30 }} />
        <View>
          <Text>내 정보</Text>
          <Text>상태 메시지</Text>
        </View>
        <Text stlye={{ marginLeft: 30 }}>인스턴스 메시지</Text>
      </View>
      <View style={styles.settingLineView} />
      <View>
        <Text>즐겨 찾기</Text>
      </View>
      <View style={styles.settingLineView} />
      <View>
        <Text>생일자</Text>
      </View>
      <View style={styles.settingLineView} />
      <View>
        <Text>친구목록</Text>
      </View>
    </View>
  );
};
export default Friend;
