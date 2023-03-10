// react
import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Modal } from "react-native";

// custom
import styles from "./Style";
const AddFriendModal = ({ isFriendAddModal, setIsFriendAddModal }) => {
  const [searchFor, setSearchFor] = useState("");
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFriendAddModal}
        onRequestClose={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.addFriendContainer}>
          <View style={styles.headerBtnContainer}>
            <Pressable
              onPress={() => {
                setIsFriendAddModal(!isFriendAddModal);
              }}
            >
              <Image
                source={require("@public/image/leftArrow_black04.png")}
                style={styles.CloseImage}
              />
            </Pressable>
            <Pressable
              style={styles.starImage}
              onPress={() => {
                console.log("확인버튼클릭");
              }}
            >
              <Text style={styles.confirmText}>확인</Text>
            </Pressable>
          </View>
          <View style={styles.topViewContainer}>
            <Pressable
              onPress={() => {
                setSearchFor("QR");
              }}
            >
              <Image
                style={styles.topBtnImage}
                source={require("@public/image/qrcodeSearch_black01.png")}
              />
              <Text>QR코드</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSearchFor("PHONE");
              }}
            >
              <Image
                style={styles.topBtnImage}
                source={require("@public/image/numberSearch_black01.png")}
              />
              <Text>연락처로 추가</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSearchFor("ID");
              }}
            >
              <Image
                style={styles.topBtnImage}
                source={require("@public/image/idSearch_black01.png")}
              />
              <Text>ID로 추가</Text>
            </Pressable>
          </View>

          <View style={styles.middleViewContainer}>
            <Text>default</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AddFriendModal;
