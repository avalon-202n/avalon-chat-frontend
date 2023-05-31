import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const setToken = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (err) {
    console.log('setToken Error', err);
  }
};
// save
export const saveLoginInfo = async (toSave) => {
  try {
    await AsyncStorage.setItem('loginInfo', JSON.stringify(toSave));
  } catch (err) {
    console.log('Save LoginInfo Error', err);
  }
};

export const saveFriendList = async (toSave) => {
  try {
    await AsyncStorage.setItem('friendList', JSON.stringify(toSave));
  } catch (err) {
    console.log('Save Friend List Error', err);
  }
};

export const saveFavorList = async (toSave) => {
  try {
    await AsyncStorage.setItem('favorList', JSON.stringify(toSave));
  } catch (err) {
    console.log('Save Favor List Error', err);
  }
};

export const saveNewFriend = async (toSave) => {
  try {
    await AsyncStorage.setItem('newFriends', JSON.stringify(toSave));
  } catch (err) {
    console.log('Save New Friend Error', err);
  }
};

export const loadLoginInfo = async () => {
  try {
    const s = await AsyncStorage.getItem('loginInfo');
    if (s) return await JSON.parse(s);
  } catch (err) {
    console.log('Load LoginInfo Error', err);
  }
};

export const getToken = async (tokenName) => {
  try {
    const s = await SecureStore.getItemAsync(tokenName);
    if (s) return s;
  } catch (err) {
    console.log('Get Token Error', err);
  }
};

export const loadMyInfo = async () => {
  try {
    const s = await AsyncStorage.getItem('memberInfo');
    if (s) return await JSON.parse(s);
  } catch (err) {
    console.log('Load My Info Error', err);
  }
};

export const loadNewFriend = async () => {
  try {
    const s = await AsyncStorage.getItem('newFriends');
    if (s) return await JSON.parse(s);
  } catch (err) {
    console.log('Load New Friend Error', err);
  }
};

export const loadFriendList = async () => {
  try {
    const s = await AsyncStorage.getItem('friendList');
    if (s) return await JSON.parse(s);
  } catch (err) {
    console.log('Load Friend List Error', err);
  }
};

export const loadFavorList = async () => {
  try {
    const s = await AsyncStorage.getItem('favorList');
    if (s) return await JSON.parse(s);
  } catch (err) {
    console.log('Load Favorite List Error', err);
  }
};

// remove
export const removeItem = async (s) => {
  try {
    await AsyncStorage.removeItem(s);
  } catch (err) {
    console.log('Remove Item Error', err);
  }
};

export const removeToken = async () => {
  try {
    SecureStore.deleteItemAsync('token');
  } catch (err) {
    console.log('Remove Token Error', err);
  }
};

export const removeAllItem = async () => {
  try {
    keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (err) {
    console.log(err);
  }
};
