// React Component
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
// Util
import * as Storage from '@util/Storage.js';
import styles from './style';
const SplashAppScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    Storage.loadLoginInfo().then((ret) => {
      if (ret && Object.keys(ret).length !== 0)
        navigation.reset({
          routes: [{ name: 'Login', params: { loginInfo: ret } }],
        });
      else SplashScreen.hideAsync();
      setTimeout(() => {
        navigation.reset({ routes: [{ name: 'LoginSetup' }] });
      }, 1500);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <Image source={require('@public/image/pepsi.png')} style={styles.mainImage} />
    </View>
  );
};

export default SplashAppScreen;
