// react
import React from "react";
import { View, Text } from "react-native";

// custom
import styles from "@screen/Style";
import { TopView, MidView, BottomView } from "@component";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopView />
      <MidView />
      <BottomView />
    </View>
  );
};

export default HomeScreen;
