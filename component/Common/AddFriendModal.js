// react
import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Modal } from "react-native";

// custom
import styles from "./Style";
const AddFriendModal = ({ isFriendAddModal, setIsFriendAddModal }) => {
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
          <View style={styles.TopbuttonContainer}>
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
              <Text style={{ fontSize: 20, marginTop: 10 }}>확인</Text>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pressable
              onPress={() => {
                console.log("QR코드");
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                source={require("@public/image/more_black01.png")}
              />
              <Text>QR코드</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("연락처로 추가");
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                source={require("@public/image/more_black01.png")}
              />
              <Text>연락처로 추가</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("ID로 추가");
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
                source={require("@public/image/more_black01.png")}
              />
              <Text>ID로 추가</Text>
            </Pressable>
          </View>

          <View
            style={{
              flex: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <Text>default</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AddFriendModal;
