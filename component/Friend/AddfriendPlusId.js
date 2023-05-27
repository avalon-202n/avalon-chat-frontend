// react
import React from 'react';
import { Text, TextInput, View } from 'react-native';
// custom
import AddfriendSearch from '@component/Friend/AddfriendSearch';
import styles from './Style';
const AddfriendPlusId = ({ phoneNumber, setPhoneNumber }) => {
  const isAddfriendSearch = true;
  return (
    <View style={styles.container}>
      <View style={styles.inputContents}>
        <TextInput
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          style={styles.inputText}
          placeholderTextColor='white'
          placeholder='전화 번호'
        />
        <View style={styles.lineView} />
      </View>
      <View style={styles.descView}>
        <Text style={styles.descText}>-없이 숫자만 입력해주세요</Text>
        {isAddfriendSearch ? <AddfriendSearch /> : null}
      </View>
    </View>
  );
};
export default AddfriendPlusId;
