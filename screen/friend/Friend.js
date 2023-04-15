// react
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

// recoil
import { useRecoilValue } from 'recoil';
// custom
import styles from './Style';

// store
import { photoPathState } from '@store/User';

const FriendScreen = () => {
  const [profileName, setProfileName] = useState('이름');
  const [profileMessage, setProfileMessage] = useState('프로필메세지');
  const photoPath = useRecoilValue(photoPathState);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.profileContainer}>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => {
            navigation.navigate('ProfileModal', {
              profileName: profileName,
              profileMessage: profileMessage,
            });
          }}
        >
          {photoPath !== '' ? (
            <Image source={{ uri: photoPath }} style={styles.profileImg} />
          ) : (
            <Image
              source={require('@public/image/pepsi.png')}
              style={styles.profileImg}
            />
          )}

          <View style={styles.profileInclude}>
            <Text style={styles.profileName}>{profileName}</Text>
            <Text style={styles.profileMessage}>{profileMessage}</Text>
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
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('@public/image/pepsi.png')}
                style={styles.profileImg}
              />
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Text>즐겨찾기이름</Text>
                <Text>즐겨찾기프로필메세지</Text>
              </View>
            </View>
          </Pressable>
        }
      </View>

      <View style={styles.settingLineView} />
      <View>
        <Text style={styles.contentText}>친구목록</Text>
      </View>
    </ScrollView>
  );
};
export default FriendScreen;
