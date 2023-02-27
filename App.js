// react
import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBarHeightCallbackContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

// custom component

import { ChatScreen } from "@screen/chat";
import { FriendScreen } from "@screen/friend";
import { SettingScreen } from "@screen/setting";
import { SettingFriend, HeaderRightFriend } from "@component/Friend";
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

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingScreen">
      <Stack.Screen
        name="SettingFriend"
        component={SettingFriend}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Friend"
            component={FriendScreen}
            options={{
              headerShown: true,
              headerTitle: "",
              headerLeft: () => {
                return (
                  <Text
                    style={{
                      fontSize: windowWidth * 20,
                      marginLeft: windowWidth * 20,
                    }}
                  >
                    친구
                  </Text>
                );
              },
              headerRight: () => {
                return <HeaderRightFriend />;
              },
              tabBarIconStyle: "center",
              tabBarLabel: "",
              tabBarLabelPosition: "beside-icon",
              tabBarIcon: () => (
                <Image
                  source={require("./public/image/user_01.png")}
                  style={{ width: windowWidth * 30, height: windowWidth * 30 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerShown: true,
              headerTitle: "",
              headerLeft: () => {
                return (
                  <Text
                    style={{
                      fontSize: windowWidth * 20,
                      marginLeft: windowWidth * 20,
                    }}
                  >
                    채팅
                  </Text>
                );
              },
              tabBarIconStyle: "center",
              tabBarLabel: "",
              tabBarLabelPosition: "beside-icon",
              tabBarIcon: () => (
                <Image
                  source={require("./public/image/chat_black01.png")}
                  style={{ width: windowWidth * 30, height: windowWidth * 30 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingStack}
            options={{
              headerShown: true,
              headerTitle: "",
              headerLeft: () => {
                return (
                  <Text
                    style={{
                      fontSize: windowWidth * 20,
                      marginLeft: windowWidth * 20,
                    }}
                  >
                    더보기
                  </Text>
                );
              },
              tabBarIconStyle: "center",
              tabBarLabel: "",
              tabBarLabelPosition: "beside-icon",
              tabBarIcon: () => (
                <Image
                  source={require("./public/image/more_01.png")}
                  style={{ width: windowWidth * 30, height: windowWidth * 30 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
