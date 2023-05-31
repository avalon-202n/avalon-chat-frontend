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
      {/* 수정한 UI에서는 하단 View가 없어서 주석처리 했습니다. */}
      {/* <BottomView bottomContents={bottomContents} onPressContents={getContents} /> */}
    </View>
  );
};

export default HomeScreen;
