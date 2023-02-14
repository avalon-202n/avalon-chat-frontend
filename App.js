import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import {View, Text} from 'react-native'
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

const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
        
    </RecoilRoot>
    
  )
}

export default App;
