import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//navigation container
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//screens
/* HomeStack */
import forYouScreen from "../screens/HomeStackScreen/ForYouScreen";
import ViewAllScreen from "../screens/HomeStackScreen/ViewAllScreen";
import SubScreen from "../screens/HomeStackScreen/SubScreen";
import MusicScreen from "../screens/HomeStackScreen/MusicScreen";
import ChannelsScreen from "../screens/HomeStackScreen/ChannelsScreen";
import TrendingScreen from "../screens/HomeStackScreen/TrendingScreen";
import VideoOpenScreen from "../screens/HomeStackScreen/VideoOpenScreen";

/* MyFilesStack */
import MyFilesScreen from "../screens/MyFilesStack/MyFilesScreen";

/* MeStack */
import MeScreen from "../screens/MeStack/MeScreen";
import MyProfileScreen from "../screens/MeStack/MyProfile";

//images
import home from "../assets/png/home.png";
import myFiles from "../assets/png/myfiles.png";
import Me from "../assets/png/me.png";
import decHome from "../assets/png/decolored_home.png";
import decDownload from "../assets/png/decolored_download.png";
import decMe from "../assets/png/decolored_me.png";

import searchMyFiles from "../assets/png/search_myfiles.png";
import copyMyFiles from "../assets/png/copy.png";
import lockMyFiles from "../assets/png/lock_myfiles.png";
import threedotMyFiles from "../assets/png/threedot_myfiles.png";

//colors
import colors from "../utils/colors";

const appTheme = {
  colors: {
    background: colors.theme,
  },
};

const HomeStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="forYou"
    >
      <Stack.Screen name="forYou" component={forYouScreen} />
      <Stack.Screen name="ViewAll" component={ViewAllScreen} />
      <Stack.Screen name="sub" component={SubScreen} />
      <Stack.Screen name="music" component={MusicScreen} />
      <Stack.Screen name="trending" component={TrendingScreen} />
      <Stack.Screen name="channels" component={ChannelsScreen} />
      <Stack.Screen name="videoOpen" component={VideoOpenScreen} />
    </Stack.Navigator>
  );
};
/* 
const MyFilesStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="download"
    >
      <Stack.Screen name="download" component={DownloadedScreen} />
      <Stack.Screen name="music" component={MusicDownloadedScreen} />
      <Stack.Screen name="videos" component={VideosDownloadedScreen} />
    </Stack.Navigator>
  );
}; */

const MeStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="me"
    >
      <Stack.Screen name="me" component={MeScreen} />
      <Stack.Screen name="profile" component={MyProfileScreen} />
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
        component={HomeStack}
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
          headerTitle: "My Files",
          headerRight: () => (
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <Image source={searchMyFiles} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={lockMyFiles} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={copyMyFiles} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={threedotMyFiles} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeStack}
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 150,
  },
});

export default AppNavigator;
