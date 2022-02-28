import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello sub screen</Text>
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

export default SubScreen;
