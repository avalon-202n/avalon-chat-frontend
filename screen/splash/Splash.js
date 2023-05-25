// React Component
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
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
      else SplashScreen.hideAsync();

      navigation.reset({ routes: [{ name: 'LoginSetup' }] });
    });
  }, []);
};

export default SplashAppScreen;
