// react
import React, { useState } from "react";
import { View, Image, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

// custom component
import styles from "./Style";
import AddFriendModal from "@component/Common/AddFriendModal";
const HeaderRightFriend = () => {
  const navigation = useNavigation();
  const [isFriendAddModal, setIsFriendAddModal] = useState(false);
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        onPress={() => {
          setIsFriendAddModal(!isFriendAddModal);
        }}
      >
        <Image
          source={require("@public/image/user_black01.png")}
          style={styles.headerRightImg}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Setting");
        }}
      >
        <Image
          source={require("@public/image/setting_black01.png")}
          style={styles.headerRightImg}
        />
      </Pressable>
      {isFriendAddModal && (
        <AddFriendModal
          isFriendAddModal={isFriendAddModal}
          setIsFriendAddModal={setIsFriendAddModal}
        />
      )}
    </View>
  );
};

export default HeaderRightFriend;
