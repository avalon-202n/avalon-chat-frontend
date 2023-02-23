// react
import React, { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";

// custom
import styles from "./Style";
const AddFriend = () => {
  const [isModal, setIsModal] = useState(false);
  console.log("opened");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={!isModal}
        onRequestClose={() => {
          setIsModal(!isModal);
        }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Pressable style={{ width: 50, height: 50 }}>
              <Text>asd</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>open addFriend</Text>
    </View>
  );
};

export default AddFriend;
