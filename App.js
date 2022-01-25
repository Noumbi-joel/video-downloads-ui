import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navigation container
import { NavigationContainer } from '@react-navigation/native';

//tab navigation
import MyTabs from './navigation/TabNavigator';

//colors
import colors from "./utils/colors"

const appTheme = {
  colors: {
    background: colors.theme
  },
}

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
