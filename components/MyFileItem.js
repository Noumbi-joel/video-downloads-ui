import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import threedots from "../assets/png/threedot_myfiles.png";

import colors from "../utils/colors";

const MyFileItem = (props) => {
  return (
    <View style={styles.myfilesItem}>
      <View
        style={{ width: 128, alignItems: "center" }}
      >
        <Image source={props.img} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginHorizontal: 5 }}>
          <Text style={styles.dwnldText}>
            Mesut Kurtis - Malana Mawlan Siwallah
          </Text>
          <Text style={{ color: colors.search_bar_text }}>
            10.0MB | MP3 | 320K
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={threedots} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  audioDesc: {
    color: colors.search_bar_text,
    fontWeight: "400",
  },
  dwnldText: {
    color: "#151515",
    fontWeight: "bold",
    width: 200,
  },
  myfilesItem: {
    width: "100%",
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default MyFileItem;
