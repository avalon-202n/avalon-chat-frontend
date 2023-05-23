// react
import React from 'react';
import { Image, Pressable, View } from 'react-native';

// custom
import styles from './Style';

// enum
import { contents } from '@enum/state';
const BottomView = ({ onPressContents }) => {
  return (
    <View style={styles.bottomContent}>
      <View style={styles.contentsContainer}>
        <Pressable onPress={() => onPressContents(contents.friend)}>
          <Image source={require('@public/image/user_black01.png')} style={styles.bottomContentImage} />
        </Pressable>
        <Pressable onPress={() => onPressContents(contents.chat)}>
          <Image source={require('@public/image/chat_black01.png')} style={styles.bottomContentImage} />
        </Pressable>
        <Pressable onPress={() => onPressContents(contents.setting)}>
          <Image source={require('@public/image/more_black01.png')} style={styles.bottomContentImage} />
        </Pressable>
      </View>
    </View>
  );
};
export default BottomView;
