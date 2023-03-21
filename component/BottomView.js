// react
import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// custom
import styles from "./Style";
const BottomView = () => {
  const navigation = useNavigation();
  return (
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
  );
};
export default BottomView;
