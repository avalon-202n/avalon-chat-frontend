// react
import React from "react";
import { View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

// custom component
import styles from "./Style";
const HeaderRightFriend = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable onPress={() => {}}>
        <Image source={require("@public/image/user_01.png")} style={styles.headerRightImg} />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Setting");
        }}>
        <Image source={require("@public/image/setting_01.png")} style={styles.headerRightImg} />
      </Pressable>
    </View>
  );
};

export default HeaderRightFriend;
