// react
import react, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
// custom
import styles from "./Style";
import { AddFriendModal } from "@component/Common";
const TopView = () => {
  const [isOpenAddFriend, setIsOpenAddFriend] = useState(false);

  return (
    <View style={styles.topContainer}>
      <View style={styles.topTitleContainer}>
        <View style={styles.topTitleView}>
          <Text style={styles.topTitleFont}>친구</Text>
        </View>
        <View style={styles.topRightView}>
          <View style={styles.topRightIconView}>
            <Pressable
              onPress={() => {
                setIsOpenAddFriend(!isOpenAddFriend);
              }}
            >
              <Image
                source={require("@public/image/user_black01.png")}
                style={styles.topRightIcon}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("설정");
              }}
            >
              <Image
                source={require("@public/image/setting_black01.png")}
                style={styles.topRightIcon}
              />
            </Pressable>
          </View>
        </View>
      </View>
      {isOpenAddFriend === true && (
        <AddFriendModal
          isOpenAddFriend={isOpenAddFriend}
          setIsOpenAddFriend={setIsOpenAddFriend}
        />
      )}
    </View>
  );
};
export default TopView;
