import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import btn_dwnld from "../assets/png/btn_dwnld.png";

const MusicHit = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
      }}
    >
      <Image source={props.hit_img} />
      <View style={{ marginLeft: 37 }}>
        <Text style={styles.textStyle}>{props.hit_name}</Text>
        <Text style={styles.textStyledown}>{props.hit_description}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{props.track_nb}</Text>
          <TouchableOpacity>
            <Image source={btn_dwnld} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 18,
    color: "#151515",
  },
  textStyledown: {
    fontWeight: "500",
    fontSize: 14,
    color: "#969696",
    width: 165,
  },
});

export default MusicHit;
