// react
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
// recoil
import { useRecoilValue } from 'recoil';

// custom
import { ProfileModal } from '@component/Common';
import { AddfriendModal } from '@component/Friend';
import styles from './Style';

// network
import { API_URL, GET_MY_PROFILE } from '@enum/server';

// util
import * as Storage from '@util/Storage.js';

// enum
import { contents } from '@enum/state';
import { userInfo } from '@enum/user';

// screen
const TopView = ({ bottomContents, getContents }) => {
  const newUserInfo = useRecoilValue(userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [mydata, setData] = useState('');

  const [tap, setTap] = useState('friend');

  const navigation = useNavigation();
  const getMyData = async () => {
    const Token = await Storage.getToken('accessToken');
    if (Token) {
      await fetch(`${API_URL}/${GET_MY_PROFILE}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
  };

  useEffect(() => {
    getMyData();
  }, []);
  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.topTitleContainer}>
        <View style={styles.topTitleView}>
          <Text style={styles.topTitleFont}>AVALON</Text>
        </View>
        <View style={styles.topRightView}>
          <View style={styles.topRightIconView}>
            <Pressable
              onPress={() => {
                navigation.navigate('Search');
              }}
            >
              <Image source={require('@public/image/search_black01.png')} style={styles.topRightIcon} />
            </Pressable>
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
      {mydata ? (
        <View style={styles.myProfileContainer}>
          <View style={styles.myDataContainer}>
            <Text style={styles.myName}>{mydata.nickname}</Text>
            <Text style={styles.myBio}>{mydata.bio}</Text>
          </View>
          <View style={styles.myImageContainer}>
            <Pressable
              style={{ flexDirection: 'row' }}
              onPress={() => {
                setProfileIsOpen(true);
              }}
            >
              {mydata.profileImageUrl ? (
                <Image source={{ uri: mydata.profileImg }} style={styles.myImg} />
              ) : (
                <Image source={require('@public/image/pepsi.png')} style={styles.myImg} />
              )}
            </Pressable>
          </View>
        </View>
      ) : null}

      <View>
        <View style={styles.contentsContainer}>
          <Pressable
            onPress={() => {
              getContents(contents.friend);
              setTap('friend');
            }}
          >
            <Text style={tap === 'friend' ? { ...styles.activeTap } : { ...styles.normalTap }}>Friend</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              getContents(contents.chat);
              setTap('chat');
            }}
          >
            <Text style={tap === 'chat' ? { ...styles.activeTap } : { ...styles.normalTap }}>Talk</Text>
          </Pressable>
        </View>
      </View>
      {isOpen && <AddfriendModal setIsOpen={setIsOpen} isOpen={isOpen} />}
      {profileIsOpen && <ProfileModal setIsOpen={setProfileIsOpen} newUserInfo={newUserInfo} />}
    </SafeAreaView>
  );
};
export default TopView;
