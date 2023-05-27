import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './Style';

const AddfriendSearch = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContents}>
        <Image source={require('@public/image/pepsi.png')} style={styles.profileImage} />
        <Text style={styles.profileText}>이름</Text>
        <Pressable style={styles.addfriendBtn}>
          <Text style={styles.addfriendText}>친구 추가</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default AddfriendSearch;
