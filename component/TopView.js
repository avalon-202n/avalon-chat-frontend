// react
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
// custom
import { AddFriendModal } from '@component/Common';
import styles from './Style';
// enum
import { contents } from '@enum/state';
const TopView = ({ bottomContents }) => {
  const [isOpenAddFriend, setIsOpenAddFriend] = useState(false);

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
                  setIsOpenAddFriend(!isOpenAddFriend);
                }}
              >
                <Image source={require('@public/image/user_black01.png')} style={styles.topRightIcon} />
              </Pressable>
            ) : null}
            <Pressable
              onPress={() => {
                console.log('setting');
              }}
            >
              <Image source={require('@public/image/setting_black01.png')} style={styles.topRightIcon} />
            </Pressable>
          </View>
        </View>
      </View>
      {isOpenAddFriend === true && (
        <AddFriendModal isOpenAddFriend={isOpenAddFriend} setIsOpenAddFriend={setIsOpenAddFriend} />
      )}
    </View>
  );
};
export default TopView;
