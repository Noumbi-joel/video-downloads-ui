import React from "react";
import { StyleSheet, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//navigation container
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//screens
import forYouScreen from "../screens/HomeStackScreen/ForYouScreen";
import MeScreen from "../screens/MeScreen";
import MyFilesScreen from "../screens/MyFilesScreen";
import ViewAllScreen from "../screens/HomeStackScreen/ViewAllScreen";
import SubScreen from "../screens/HomeStackScreen/SubScreen";
import MusicScreen from "../screens/HomeStackScreen/MusicScreen";
import ChannelsScreen from "../screens/HomeStackScreen/ChannelsScreen";
import TrendingScreen from "../screens/HomeStackScreen/TrendingScreen";

//images
import home from "../assets/png/home.png";
import myFiles from "../assets/png/myfiles.png";
import Me from "../assets/png/me.png";
import decHome from "../assets/png/decolored_home.png";
import decDownload from "../assets/png/decolored_download.png";
import decMe from "../assets/png/decolored_me.png";

//colors
import colors from "../utils/colors";

const appTheme = {
  colors: {
    background: colors.theme,
  },
};

const HomeStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="forYou">
      <Stack.Screen name="forYou" component={forYouScreen} />
      <Stack.Screen
        name="ViewAll"
        options={{ headerShown: false }}
        component={ViewAllScreen}
      />
      <Stack.Screen
        name="sub"
        options={{ headerShown: false }}
        component={SubScreen}
      />
      <Stack.Screen
        name="music"
        options={{ headerShown: false }}
        component={MusicScreen}
      />
      <Stack.Screen
        name="trending"
        options={{ headerShown: false }}
        component={TrendingScreen}
      />
      <Stack.Screen
        name="channels"
        options={{ headerShown: false }}
        component={ChannelsScreen}
      />
    </Stack.Navigator>
  );
};

const AppTabs = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: colors.tab_black_text,
        tabBarInactiveTintColor: colors.grey_text,
        tabBarLabelStyle: {
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={forYouScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? home : decHome} />
          ),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyFiles"
        component={MyFilesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? myFiles : decDownload} />
          ),
          tabBarLabel: "My Files",
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={focused ? Me : decMe} />,
          tabBarLabel: "Me",
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = (props) => {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={AppTabs} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    height: 70,
    shadowOpacity: 0.1,
    shadowColor: colors.dec_border_link,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
  },
});

export default AppNavigator;
