// react
import React, { useState } from "react";
import { View, Text } from "react-native";

// custom
import styles from "@screen/Style";
import { TopView, MidView, BottomView } from "@component";

// enum
import { contents } from "@enum/state";
const HomeScreen = () => {
  const [bottomContents, setContents] = useState(contents.friend);

  const getContents = (contents) => {
    setContents(contents);
  };
  return (
    <View style={styles.container}>
      <TopView bottomContents={bottomContents} getContents={getContents} />
      <MidView bottomContents={bottomContents} />
      <BottomView
        bottomContents={bottomContents}
        onPressContents={getContents}
      />
    </View>
  );
};

export default HomeScreen;
