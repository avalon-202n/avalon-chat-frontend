// react
import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

// recoil
import { useRecoilState, useRecoilValue } from 'recoil';

// custom
import { ProfileModal } from '@component/Common';
import styles from './Style';

// network
import { API_URL, GET_PROFILES_LIST } from '@enum/server';

// store
import { friendListState, photoPathState } from '@store/User';

// enum
import { userInfo } from '@enum/user';

// util
import * as Storage from '@util/Storage.js';

const FriendScreen = () => {
  const newUserInfo = useRecoilValue(userInfo);
  const photoPath = useRecoilValue(photoPathState);
  const [friendList, setFriendList] = useRecoilState(friendListState);
  const [favoriteList, setFavoriteList] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const getFriend = async () => {
    const Token = await Storage.getToken('accessToken');
    if (Token) {
      await fetch(`${API_URL}/${GET_PROFILES_LIST}`, {
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
          console.log(data.data);
          setFriendList(data.data);
        });
    }
  };

  useEffect(() => {
    getFriend();
  }, []);
  return (
    <ScrollView>
      {favoriteList ? (
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
      ) : null}

      <View>
        {friendList.length > 0 ? (
          <View>
            {friendList.map((friend, idx) => (
              <View style={styles.friendContainer} key={idx}>
                {friend.profileImageUrl === null ? (
                  <Image source={require('@public/image/pepsi.png')} style={styles.profileImg} />
                ) : (
                  <Image source={{ uri: friend.profileImg }} style={styles.profileImg} />
                )}
                <View>
                  <Text style={styles.name}>{friend.nickname}</Text>
                  <Text style={styles.bio}>{friend.bio}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : null}
      </View>

      {isOpen && <ProfileModal setIsOpen={setIsOpen} newUserInfo={newUserInfo} />}
    </ScrollView>
  );
};
export default FriendScreen;
