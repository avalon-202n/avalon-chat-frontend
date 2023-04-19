// react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// recoil
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
// custom component
import { ProfileModal } from '@component/Common';
import { SettingFriend } from '@component/Friend';
// screen
import { ChatScreen } from '@screen/chat';
import { FriendScreen } from '@screen/friend';
import HomeScreen from '@screen/Home';
import { LoadScreen, LoginScreen, LoginSetupScreen } from '@screen/login';
import { SettingScreen } from '@screen/setting';
import { SignupScreen } from '@screen/signup';
import { SplashAppScreen } from '@screen/splash';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Group>
            <Stack.Screen
              name='Splash'
              component={SplashAppScreen}
              options={{ headerShown: false, animationEnabled: false }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name='LoginSetup' component={LoginSetupScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name='Load' component={LoadScreen} options={{ headerShown: false }} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Friend' component={FriendScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProfileModal' component={ProfileModal} options={{ headerShown: false }} />
            <Stack.Screen name='Setting' component={SettingScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SettingFriend' component={SettingFriend} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={ChatScreen} options={{ headerShown: false }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </RecoilRoot>
  );
};

export default App;
