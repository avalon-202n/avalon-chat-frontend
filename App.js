import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// *react
import { ProfileScreen } from '@screen/profile';
import { ChatScreen } from '@screen/chat';
// import { } from '@screen/friend';
// import { } from '@screen/setting';
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
      <RecoilNexus/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Group>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
              <Tab.Screen name="Chat" component={ChatScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
        
    </RecoilRoot>
    
  )
}

export default App;
