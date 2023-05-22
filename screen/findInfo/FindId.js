import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { API_URL } from '@enum/server';
import styles from './Style';

const FindIdScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    formatPhoneNumber();
  }, [phoneNumber]);

  const getEmail = async () => {
    try {
      await fetch(`${API_URL}/login/email?phone_number=${phoneNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.email) {
            Alert.alert(`가입된 계정은 "${data.email}" 입니다`);
          } else {
            Alert.alert('가입된 계정이 없습니다.');
          }
        });
    } catch (e) {
      console.log('아이디 찾기 API ERROR : ', e);
    }
  };

  const formatPhoneNumber = () => {
    const formatNumber = phoneNumber.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
    if (formatNumber) {
      setPhoneNumber(formatNumber);
    }
  };
  return (
    <View style={styles.findContainer}>
      <View>
        <Text style={styles.title}>아이디 찾기</Text>
      </View>

      <View style={styles.textField}>
        <TextInput
          value={phoneNumber}
          placeholder='휴대폰 번호를 입력해주세요.'
          onChangeText={(e) => {
            setPhoneNumber(e);
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonField}>
        <Pressable
          onPress={() => {
            getEmail();
          }}
          style={styles.button}
        >
          <Text>아이디 찾기</Text>
        </Pressable>
      </View>

      <View style={styles.guideBox}>
        <Text style={styles.guideTitle}>아이디가 기억나지 않아요.</Text>
        <Text style={styles.guideContent}>계정을 만들 때 주로 사용하는 휴대폰 번호를 입력하시면</Text>
        <Text style={styles.guideContent}>가입 계정이 있는지 찾아드려요.</Text>
        <Text style={styles.guideContent}>ex 010-xxxx-xxxx</Text>
      </View>
    </View>
  );
};

export default FindIdScreen;
