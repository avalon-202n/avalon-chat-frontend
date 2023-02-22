// react
import React, { useState } from "react";
import { View, Image, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// custom component
import { ProfileScreen } from "@screen/profile";
import { ChatScreen } from "@screen/chat";
import { FriendScreen } from "@screen/friend";
import { SettingScreen } from "@screen/setting";
// import { } from '@screen/login';
// import { } from '@screen/signup';

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
        <Tab.Navigator>
          <Tab.Screen
            name="Friend"
            component={FriendScreen}
            options={{
              headerTitle: "",
              headerLeft: () => {
                return <Text style={{ fontSize: windowWidth * 20, marginLeft: windowWidth * 10 }}>친구</Text>;
              },
              headerRight: () => {
                return (
                  //컴포넌트화
                  <View style={{ flexDirection: "row" }}>
                    <Pressable
                      onPress={() => {
                        //SettingFriend 이동
                      }}>
                      <Image
                        source={require("./public/image/user_01.png")}
                        style={{ width: windowWidth * 30, height: windowWidth * 30 }}
                      />
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        //AddFriend 이동
                      }}>
                      <Image
                        source={require("./public/image/setting_01.png")}
                        style={{ width: windowWidth * 30, height: windowWidth * 30 }}
                      />
                    </Pressable>
                  </View>
                );
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
              headerTitle: "채팅",
              tabBarIconStyle: "center",
              tabBarLabel: "",
              tabBarLabelPosition: "beside-icon",
              tabBarIcon: () => (
                <Image
                  source={require("./public/image/chat_01.png")}
                  style={{ width: windowWidth * 30, height: windowWidth * 30 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              headerTitle: "더보기",
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
