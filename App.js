// react
import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBarHeightCallbackContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
// custom component

import { ChatScreen } from "@screen/chat";
import { FriendScreen } from "@screen/friend";
import { SettingScreen } from "@screen/setting";
import { SettingFriend, HeaderRightFriend } from "@component/Friend";
import { ProfileEditModal } from "@component/Common";
import HomeScreen from "./screen/Home";
// import { } from '@screen/login';
// import { } from '@screen/signup';
// import { } from "@screen/profile";
// recoil
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

// enum
import { windowWidth, windowHeight } from "@enum/size";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FriendScreen"
            component={FriendScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileEditModal"
            component={ProfileEditModal}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SettingFriend"
            component={SettingFriend}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </RecoilRoot>
  );
};

export default App;
