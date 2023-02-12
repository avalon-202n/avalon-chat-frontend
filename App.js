import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

// import { } from '@screen/login';
// import { } from '@screen/signup';
// import { } from '@screen/profile';
// import { } from '@screen/friend';
// import { } from '@screen/chat';
// import { } from '@screen/setting';
import HomeScreen from './screen/Home';

import { RecoilRoot } from 'recoil';
// import RecoilNexus from "recoil-nexus";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Group>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
                <Stack.Screen name="Point" component={PointScreen}/>
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
        <SocketContainer/>
    </RecoilRoot>
  )
}

export default App;
