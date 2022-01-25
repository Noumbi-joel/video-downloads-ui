import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

//screens 
import HomeScreen from '../screens/HomeScreen';
import MeScreen from '../screens/MeScreen';
import MyFilesScreen from '../screens/MyFilesScreen';

//images
import home from "../assets/png/home.png"
import myFiles from "../assets/png/myfiles.png"
import Me from "../assets/png/me.png"
import decHome from "../assets/png/decolored_home.png"
import decDownload from "../assets/png/decolored_download.png"
import decMe from "../assets/png/decolored_me.png"

//colors
import colors from '../utils/colors';

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: colors.tab_black_text,
                tabBarInactiveTintColor: colors.grey_text,
                tabBarLabelStyle: {
                    marginBottom: 10
                }
            }}
        >
          <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size, focused }) => (
                  <Image source={focused ? home:decHome} />
                ),
                tabBarLabel: "Home",
                headerShown: false,
            }} 
        />
          <Tab.Screen name="MyFiles" component={MyFilesScreen} 
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size, focused }) => (
                    <Image source={focused ? myFiles:decDownload} />
                ),
                tabBarLabel: "My Files"
            }} 
        />
          <Tab.Screen name="Me" component={MeScreen} 
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size, focused }) => (
                    <Image source={focused ? Me:decMe} />
                ),
                tabBarLabel: "Me",
                
            }} 
        />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 70,
        shadowOpacity: 0.2,
        shadowColor: "#f1f1f1",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 3.5
    }
})

export default MyTabs;