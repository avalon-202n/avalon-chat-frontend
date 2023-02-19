import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// *react
import { ProfileScreen } from '@screen/profile';
import { ChatScreen } from '@screen/chat';
import { FriendScreen } from '@screen/friend';
import { SettingScreen } from '@screen/setting';
// import { } from '@screen/login';
// import { } from '@screen/signup';
import HomeScreen from './screen/Home';

import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Friend" component={FriendScreen} options={{headerTitle:"친구"}}>
          {/* {() => (
            <Stack.Navigator>
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          )} */}
          </Tab.Screen>
          <Tab.Screen name="Chat" component={ChatScreen} options={{headerTitle:"채팅"}}/>
          <Tab.Screen name="Setting" component={SettingScreen} options={{headerTitle:"더보기"}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  )
}

export default App;
