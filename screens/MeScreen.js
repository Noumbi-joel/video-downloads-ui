import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MeScreen = () => {
  return <View style={styles.container}>
      <Text>Me !</Text>
  </View>;
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   } 
}) 

export default MeScreen;
