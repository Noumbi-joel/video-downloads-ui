import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";

//navigation container
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//screens 
import HomeScreen from '../screens/HomeScreen';
import MeScreen from '../screens/MeScreen';
import MyFilesScreen from '../screens/MyFilesScreen';
import ViewAllScreen from '../screens/ViewAllScreen';

//images
import home from "../assets/png/home.png"
import myFiles from "../assets/png/myfiles.png"
import Me from "../assets/png/me.png"
import decHome from "../assets/png/decolored_home.png"
import decDownload from "../assets/png/decolored_download.png"
import decMe from "../assets/png/decolored_me.png"

//colors
import colors from '../utils/colors';


const appTheme = {
    colors: {
      background: colors.theme
    },
}

const HomeStack = (props) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ViewAll" options={{headerShown: false}} component={ViewAllScreen} />
        </Stack.Navigator>
    )
}

const AppTabs = (props) => {
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
    )
}

const AppNavigator = (props) => {
    return (
        <NavigationContainer theme={appTheme}>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Tabs'
            >
                <Stack.Screen name="Tabs" component={AppTabs} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
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
        shadowOpacity: 0.1,
        borderTopWidth: 0,
        shadowColor: "#f1f1f1",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 3.5
    }
})

export default AppNavigator;