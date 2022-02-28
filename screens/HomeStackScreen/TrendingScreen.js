import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrendingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello trending screen</Text>
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

export default TrendingScreen;
