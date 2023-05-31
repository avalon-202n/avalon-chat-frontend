import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
// network
import { APIfetch } from '@network/APIfetch';
import { SIGNUP_PHONE_CHECK, SIGNUP_PHONE_SEND, FIND_PASSWORD } from '@enum/server';
import styles from './Style';
const FindPwScreen = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [certificationCode, setCertificationCode] = useState('');
  const [certificationState, setCertificationState] = useState(false);
  useEffect(() => {
    formatPhoneNumber();
  }, [phoneNumber]);

  // 인증번호 전송
  const getCertificationNumber = async () => {
    if (phoneNumber.length === 13) {
      Alert.alert('인증번호를 발송했습니다.');
      await APIfetch(SIGNUP_PHONE_SEND, phoneNumber);
    } else {
      Alert.alert('휴대폰 번호를 다시 확인해주세요.');
    }
  };

  const formatPhoneNumber = () => {
    const formatNumber = phoneNumber.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
    if (formatNumber) {
      setPhoneNumber(formatNumber);
    }
  };
  // 인증번호 확인
  const checkCertificationNumber = async () => {
    const res = await APIfetch(SIGNUP_PHONE_CHECK, { phoneNumber: phoneNumber, certificationCode: certificationCode });
    const result = await res.json();

    if (result.authenticated) {
      setCertificationState(true);
      Alert.alert('확인되었습니다.');
    } else {
      setCertificationState(false);
      Alert.alert('인증번호를 확인해주세요');
    }
    console.log('인증번호 확인 동작');
  };

  // 비밀번호 찾기
  const getPassword = async () => {
    console.log('비밀번호 찾기 동작');
    try {
      await APIfetch(FIND_PASSWORD, { email: email, certificationCode: certificationCode })
        .then((res) => res.json())
        .then((data) => {
          if (data.password) {
            Alert.alert(`가입된 계정은 "${data.password}" 입니다`);
          }
          Alert.alert('입력한 정보를 다시 확인해주세요.');
        });
    } catch (e) {
      console.log('비밀번호 찾기 API ERROR : ', e);
    }
  };
  return (
    <View style={styles.findContainer}>
      <View>
        <Text style={styles.title}>비밀번호 찾기</Text>
      </View>
      <View style={styles.textField}>
        <TextInput
          placeholder='이메일 주소를 입력해주세요.'
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.DualField}>
        <TextInput
          placeholder='휴대폰 번호를 입력해주세요.'
          value={phoneNumber}
          onChangeText={(e) => {
            setPhoneNumber(e);
          }}
          style={styles.DualInput}
        />
        <Pressable
          onPress={() => {
            getCertificationNumber();
          }}
          style={styles.DualButton}
        >
          <Text style={styles.DualButtonText}>발송</Text>
        </Pressable>
      </View>
      <View style={styles.DualField}>
        <TextInput
          placeholder='인증번호를 입력해주세요'
          value={certificationCode}
          onChangeText={(e) => {
            setCertificationCode(e);
          }}
          style={styles.DualInput}
        />
        <Pressable
          onPress={() => {
            checkCertificationNumber();
          }}
          style={styles.DualButton}
        >
          <Text style={styles.DualButtonText}>확인</Text>
        </Pressable>
      </View>
      {certificationState ? (
        <View style={styles.buttonField}>
          <Pressable
            onPress={() => {
              getPassword();
            }}
            style={styles.button}
          >
            <Text style={{ color: '#fff' }}>비밀번호 찾기</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonField}>
          <Pressable style={styles.disableButton}>
            <Text style={{ color: '#fff' }}>비밀번호 찾기</Text>
          </Pressable>
        </View>
      )}

      <View style={styles.guideBox}>
        <Text style={styles.guideTitle}>비밀번호가 기억나지 않아요.</Text>
        <Text style={styles.guideContent}>계정을 만들 때 주로 사용하는 휴대폰 번호를 입력하시면</Text>
        <Text style={styles.guideContent}>해당 휴대폰 번호로 인증번호를 보내드립니다.</Text>
        <Text style={styles.guideContent}>인증번호와 이메일를 입력하시면 비밀번호를 찾을 수 있어요.</Text>
      </View>
    </View>
  );
};

export default FindPwScreen;
