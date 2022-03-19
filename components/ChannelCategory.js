import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import colors from "../utils/colors";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ChannelCategory = (props) => {
  return (
    <View>
      <Text
        style={{
          color: "#151515",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {props.catName}
      </Text>
      {props.beautAndFash.map((item, index) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
          key={index}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={item.img} />
            <View>
              <Text
                style={{ color: "#343434", fontSize: 18, fontWeight: "500" }}
              >
                {item.name}
              </Text>
              <Text style={{ color: colors.search_bar_text }}>
                2.31M Subscribers
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={{ alignSelf: "center" }}>
        <AntDesign name="arrowdown" size={24} color={colors.search_bar_text} />
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: colors.grey_text,
          marginVertical: 10,
        }}
      ></View>
    </View>
  );
};

export default ChannelCategory;
