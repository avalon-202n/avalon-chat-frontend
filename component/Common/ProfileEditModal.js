// react
import React from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
// custom
import styles from "./Style";
const ProfileEditModal = () => {
  console.log("프로필 모달 오픈");
  //  프로필수정모달(이미지 변경)
  // const [profileImage, setProfileImage] = useState(null);
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setProfileImage(result.assets[0].uri);
  //   }
  // };
  return (
    <View>
      <Text>프로필 수정모달</Text>
    </View>
  );
};

export default ProfileEditModal;
