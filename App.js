import React from "react";
import { Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// react
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
              headerTitle: "친구",
              tabBarIconStyle: "center",
              tabBarLabel: "",
              tabBarLabelPosition: "beside-icon",
              tabBarIcon: () => (
                <Image
                  source={require("./public/image/user/user_24px.png")}
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
                  source={require("./public/image/chat_64px.png")}
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
                  source={require("./public/image/more_64px.png")}
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
