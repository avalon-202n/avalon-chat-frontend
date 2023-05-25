// react
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
// custom
import { AddfriendModal } from '@component/Friend';
import styles from './Style';
// enum
import { contents } from '@enum/state';
// screen
const TopView = ({ bottomContents, getContents }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.topContainer}>
      <View style={styles.topTitleContainer}>
        <View style={styles.topTitleView}>
          <Text style={styles.topTitleFont}>
            {bottomContents === contents.friend ? '친구' : bottomContents === contents.chat ? '채팅' : '더보기'}
          </Text>
        </View>
        <View style={styles.topRightView}>
          <View style={styles.topRightIconView}>
            {bottomContents === contents.friend ? (
              <Pressable
                onPress={() => {
                  setIsOpen(true);
                }}
              >
                <Image source={require('@public/image/user_black01.png')} style={styles.topRightIcon} />
              </Pressable>
            ) : null}
            <Pressable
              onPress={() => {
                getContents(contents.setting);
              }}
            >
              <Image source={require('@public/image/setting_black01.png')} style={styles.topRightIcon} />
            </Pressable>
          </View>
        </View>
      </View>
      {isOpen && <AddfriendModal setIsOpen={setIsOpen} isOpen={isOpen} />}
    </View>
  );
};
export default TopView;
