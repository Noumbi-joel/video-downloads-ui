import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//images and icons
import edit_img from "../../assets/png/edit_acc_img.png";
import arrow_right from "../../assets/png/arrow_right.png";

import colors from "../../utils/colors";

const MyProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={edit_img} />
      <TouchableOpacity
        style={{
          width: 320,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderWidth: 2,
          marginVertical: 10,
          borderRadius: 12,
          borderColor: "#f1f1f1",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Name</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.search_bar_text,
            }}
          >
            Sadek Hossen
          </Text>
          <Image style={{marginLeft: 10}} source={arrow_right} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 320,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderWidth: 2,
          marginVertical: 10,
          borderRadius: 12,
          borderColor: "#f1f1f1",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Gender</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.search_bar_text,
            }}
          >
            Male
          </Text>
          <Image style={{marginLeft: 10}} source={arrow_right} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 320,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderWidth: 2,
          marginVertical: 10,
          borderRadius: 12,
          borderColor: "#f1f1f1",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Birthday</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.search_bar_text,
            }}
          >
            11 Sept 2001
          </Text>
          <Image style={{marginLeft: 10}} source={arrow_right} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default MyProfileScreen;
