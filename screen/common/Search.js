import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
// recoil
import { useRecoilValue } from 'recoil';
// store
import { friendListState } from '@store/User';
const SearchScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredFriendList, setFilteredFriendList] = useState([]);
  const friendList = useRecoilValue(friendListState);

  const navigation = useNavigation();
  useEffect(() => {
    filterFriendList();
  }, [inputValue, friendList]);

  const filterFriendList = () => {
    const filteredFriends = friendList.filter((friend) => {
      const lowercaseInputValue = inputValue.toLowerCase();
      const lowercaseFriendName = friend.nickname.toLowerCase();
      return lowercaseFriendName.includes(lowercaseInputValue);
    });
    setFilteredFriendList(filteredFriends);
  };

  return (
    <SafeAreaView>
      <View style={{ marginLeft: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{ width: '90%', height: 30, padding: 5, fontSize: 20 }}
            onChangeText={(text) => {
              setInputValue(text);
            }}
            value={inputValue}
            placeholder='검색'
          />
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text>뒤로</Text>
          </Pressable>
        </View>
        <View style={{ width: '100%', borderBottomWidth: 1, marginBottom: 10 }} />
        <View>
          {inputValue &&
            filteredFriendList.map((friend, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  console.log(friend.nickname);
                  //open profile
                }}
              >
                <Text key={index}>{friend.nickname}</Text>
              </Pressable>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
