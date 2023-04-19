// React Component
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
// Util
import * as Storage from '@util/Storage.js';
const SplashAppScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    Storage.loadLoginInfo().then((ret) => {
      if (ret && Object.keys(ret).length !== 0)
        navigation.reset({
          routes: [{ name: 'Login', params: { loginInfo: ret } }],
        });
      else navigation.reset({ routes: [{ name: 'LoginSetup' }] });
      SplashScreen.hideAsync();
    });
  }, []);

  return (
    <View>
      <StatusBar style='dark' />
    </View>
  );
};

export default SplashAppScreen;
