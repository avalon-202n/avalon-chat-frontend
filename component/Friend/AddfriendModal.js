// react
import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
// enum
import { ADDFRIEND_PHONENUMBER } from '@enum/server';
// network
import { APIfetch } from '@network/APIfetch';
// custom
import { AddfriendPlusContact } from '@component/Friend/AddfriendPlusContact';
import { AddfriendPlusId } from '@component/Friend/AddfriendPlusId';
import styles from './Style';

const AddfriendModal = ({ setIsOpen, isOpen }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contact, setContact] = useState('연락처추가');
  const confirm = async (number) => {
    if (contact === '연락처추가') {
      try {
        const res = await APIfetch(ADDFRIEND_PHONENUMBER, { phoneNumber: [number] });
        const result = res.json();
        console.log(result);
        //DB에 저장된 휴대폰번호가 아직 없음
      } catch (err) {
        console.log(err);
      }
    } else {
      //아이디로 추가api
    }
  };
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerView}>
          <View style={styles.topContents}>
            <Pressable
              onPress={() => {
                setIsOpen(false);
              }}
              style={styles.topIconBtn}
            >
              <Image source={require('public/image/leftArrow_black04.png')} style={styles.backIconBtn} />
              <Text style={styles.backBtnText}>친구 추가</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                confirm(phoneNumber);
              }}
              style={styles.confirmBtn}
            >
              <Text style={styles.confirmText}>확인</Text>
            </Pressable>
          </View>
          <View style={styles.typeAddfriendView}>
            <Pressable
              onPress={() => {
                setContact('연락처추가');
              }}
              style={styles.typeAddfriendBtn}
            >
              <Image source={require('@public/image/contact_black01.png')} style={styles.typeAddfriendIcon} />
              <Text>연락처로 추가</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setContact('아이디추가');
              }}
              style={styles.typeAddfriendBtn}
            >
              <Image source={require('@public/image/search_black01.png')} style={styles.typeAddfriendIcon} />
              <Text>아이디로 추가</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.bottomContents}>
          {contact !== '연락처추가' ? (
            <AddfriendPlusContact phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          ) : (
            <AddfriendPlusId phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          )}
        </View>
      </View>
    </Modal>
  );
};
export default AddfriendModal;
