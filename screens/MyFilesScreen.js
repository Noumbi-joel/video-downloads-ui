import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MyFilesScreen = () => {
  return <View style={styles.container}>
      <Text>My Files !</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } 
})

export default MyFilesScreen;
