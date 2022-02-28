import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello music screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MusicScreen;
