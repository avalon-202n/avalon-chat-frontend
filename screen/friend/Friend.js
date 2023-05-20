// react
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

// recoil
import { useRecoilValue } from 'recoil';
// custom
import { ProfileModal } from '@component/Common';
import styles from './Style';
// store
import { photoPathState } from '@store/User';
// unum
import { userInfo } from '@enum/user';
const FriendScreen = () => {
  const newUserInfo = useRecoilValue(userInfo);
  const photoPath = useRecoilValue(photoPathState);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => {
            setIsOpen(true);
          }}
        >
          {photoPath !== '' ? (
            <Image source={{ uri: photoPath }} style={styles.profileImg} />
          ) : (
            <Image source={require('@public/image/pepsi.png')} style={styles.profileImg} />
          )}

          <View style={styles.profileInclude}>
            <Text style={styles.profileName}>{newUserInfo.userName}</Text>
            <Text style={styles.profileMessage}>{newUserInfo.userStateMessage}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.settingLineView} />
      <View>
        <Text style={styles.contentText}>즐겨 찾기</Text>
        {
          <Pressable
            onPress={() => {
              console.log('즐겨찾기 친구');
            }}
          >
            <View style={{ flexDirection: 'row' }}></View>
          </Pressable>
        }
      </View>

      <View style={styles.settingLineView} />
      <View>
        <Text style={styles.contentText}>친구목록</Text>
      </View>
      {isOpen && <ProfileModal setIsOpen={setIsOpen} newUserInfo={newUserInfo} />}
    </ScrollView>
  );
};
export default FriendScreen;
