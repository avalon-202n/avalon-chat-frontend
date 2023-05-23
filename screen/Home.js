// react
import React, { useState } from 'react';
import { View } from 'react-native';
// custom
import { BottomView, MidView, TopView } from '@component';
import styles from '@screen/Style';
// enum
import { contents } from '@enum/state';
const HomeScreen = () => {
  const [bottomContents, setContents] = useState(contents.friend);

  const getContents = (contents) => {
    setContents(contents);
  };
  return (
    <View style={styles.container}>
      <TopView bottomContents={bottomContents} getContents={getContents} />
      <MidView bottomContents={bottomContents} getContents={getContents} />
      <BottomView bottomContents={bottomContents} onPressContents={getContents} />
    </View>
  );
};

export default HomeScreen;
