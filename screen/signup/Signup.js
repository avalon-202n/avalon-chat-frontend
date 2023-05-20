// React
import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, Pressable, Text, TextInput, View } from 'react-native';
//recoil
import { useSetRecoilState } from 'recoil';
// enum
import { SIGNUP_EMAIL_DUPULICATED, SIGNUP_PHONE_CHECK, SIGNUP_PHONE_SEND } from '@enum/server';
import { userInfo } from '@enum/user';
// network
import { APIfetch } from '@network/APIfetch';
// custom
import styles from './Style';
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secPassword, secSetPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authenticateNumber, setAuthenticateNumber] = useState('');
  const [timer, setTimer] = useState(180);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSecPassword, setIsSecPassword] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isAuthenticateNumber, isSetAuthenticateNumber] = useState(false);

  const userInfomation = useSetRecoilState(userInfo);

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardVisible(true);
  });

  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardVisible(false);
  });

  useEffect(() => {
    setEmail('');
    setPassword('');
    secSetPassword('');
    setPhoneNumber('');
    setAuthenticateNumber('');
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  useEffect(() => {
    passwordCheck();
  }, [password]);
  useEffect(() => {
    secPasswordCheck();
  }, [secPassword]);

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (isTimerRunning && timer === 0) {
      setIsTimerRunning(false);
      isSetAuthenticateNumber(false);
    }
  }, [isTimerRunning, timer]);

  useEffect(() => {
    formatPhoneNumber();
  }, [phoneNumber]);

  const passwordCheck = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{7,}$/;
    const isValid = regex.test(password);
    if (isValid) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const emailCheck = async () => {
    try {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailRegex.test(email);
      if (isValid) {
        const res = await APIfetch(SIGNUP_EMAIL_DUPULICATED, { email });
        const result = await res.json();
        if (result.duplicated === false) {
          Alert.alert('사용가능합니다.');
          setIsEmail(true);
        } else {
          Alert.alert('사용할 수 없는 아이디입니다.');
          setIsEmail(false);
        }
      } else {
        Alert.alert('이메일 형식이 아닙니다');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const secPasswordCheck = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{7,}$/;
    const isValid = regex.test(secPassword);
    if (password === secPassword && isValid) {
      setIsSecPassword(true);
    } else {
      setIsSecPassword(false);
    }
  };

  const formatPhoneNumber = () => {
    const formatNumber = phoneNumber.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
    if (formatNumber) {
      setPhoneNumber(formatNumber);
    }
  };

  const authPhoneNumber = async () => {
    try {
      if (phoneNumber.length === 13) {
        Alert.alert('인증번호를 발송했습니다');
        startTimer();
        setIsPhoneNumber(true);
        await APIfetch(SIGNUP_PHONE_SEND, phoneNumber);
      } else {
        setIsPhoneNumber(false);
        Alert.alert('번호를 확인하세요');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startTimer = () => {
    setTimer(180);
    setIsTimerRunning(true);
    isSetAuthenticateNumber(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const checkAuthNumber = async () => {
    try {
      const res = await APIfetch(SIGNUP_PHONE_CHECK, {
        phoneNumber: phoneNumber,
        certificationCode: authenticateNumber,
      });
      const result = await res.json();
      if (result.authenticated) {
        isSetAuthenticateNumber(true);
        Alert.alert('확인되었습니다.');
      } else {
        isSetAuthenticateNumber(false);
        Alert.alert('인증번호를 확인해주세요');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Pressable
      style={!isKeyboardVisible ? styles.container : styles.container_withoutKeyboard}
      onPress={() => {
        handlePress();
      }}
    >
      <View style={styles.informView}>
        <Text style={styles.informText}>아이디</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder='예) avalon12@gmail.com'
          autoCapitalize='none'
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />
        <Pressable
          style={styles.checkBox}
          onPress={() => {
            {
              emailCheck();
            }
          }}
        >
          <Text style={styles.checkBoxText}>중복 확인</Text>
        </Pressable>
      </View>
      <View style={styles.informView}>
        <Text>비밀번호</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={`7자 이상, 특수문자포함(!@#$%^&*)`}
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
          secureTextEntry={true}
          maxLength={12}
        />
        <View style={styles.passwordBoxView}>
          <Text style={styles.passwordCheckText}>{isPassword ? 'OK' : 'NO'}</Text>
        </View>
      </View>
      <View style={styles.informView}>
        <Text>비밀번호 확인</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder='비밀번호를 한번 더 입력하세요'
          onChangeText={(text) => {
            secSetPassword(text);
          }}
          value={secPassword}
          secureTextEntry={true}
          maxLength={12}
        />
        <View style={styles.passwordBoxView}>
          <Text style={styles.passwordCheckText}>{isSecPassword ? 'OK' : 'NO'}</Text>
        </View>
      </View>
      <View style={styles.informView}>
        <Text>휴대폰</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder='핸드폰 번호를 입력하세요.'
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          value={phoneNumber}
          keyboardType='number-pad'
          maxLength={13}
        />
        <Pressable
          style={styles.checkBox}
          onPress={() => {
            authPhoneNumber();
          }}
        >
          <Text style={styles.checkBoxText}>{`인증번호\n발송`}</Text>
        </Pressable>
      </View>
      <View style={styles.informView}>
        <Text>인증번호</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder='인증번호를 입력하세요.'
          onChangeText={(text) => {
            setAuthenticateNumber(text);
            if (text.length === 6) {
              Keyboard.dismiss();
            }
          }}
          value={authenticateNumber}
          keyboardType='number-pad'
          maxLength={6}
        />
        <Pressable
          style={styles.checkBox}
          onPress={() => {
            checkAuthNumber();
          }}
        >
          <Text style={styles.checkBoxText}>{'인증번호\n확인'}</Text>
        </Pressable>
      </View>
      <View style={styles.informView}>
        <Text>{formatTime(timer)}</Text>
      </View>

      <View style={styles.signupView}>
        <Pressable
          style={
            isEmail && isPassword && isPhoneNumber && isSecPassword && isAuthenticateNumber
              ? styles.signupBtn
              : styles.signupBtnGray
          }
          onPress={() => {
            if (!isEmail) {
              Alert.alert('이메일을 확인하세요');
            } else if (!isPassword || !isSecPassword) {
              Alert.alert('비밀번호를 확인하세요');
            } else if (!isPhoneNumber) {
              Alert.alert('핸드폰 인증을 확인하세요');
            } else if (!isAuthenticateNumber) {
              Alert.alert('인증번호를 확인하세요');
            } else {
              userInfomation({
                userEmail: email,
                userPassword: password,
                userPhone: phoneNumber,
              });
              navigation.navigate('SignProfile');
              console.log('가입완료');
            }
          }}
        >
          <Text style={styles.signupText}>계속</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
export default SignupScreen;
