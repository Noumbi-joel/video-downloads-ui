import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../utils/colors";

//components
import SNBox from "./SNBox";

const SNFrame = (props) => {
  return (
    <View style={[styles.container, props.noScroll ? { height: 180 } : {}]}>
      {props.noScroll ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {props.logos.map((item, index) => (
            <SNBox
              noScroll={props.noScroll}
              logo={item.name}
              color={item.color}
              name={item.logoName}
              key={index}
            />
          ))}
        </View>
      ) : (
        <ScrollView horizontal style={{ flex: 0.3 }}>
          {props.logos.map((item, index) => (
            <SNBox
              logo={item.name}
              color={item.color}
              name={item.logoName}
              key={index}
            />
          ))}
        </ScrollView>
      )}
      {props.noBtn ? null : (
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() =>
            props.navigation.navigate("HomeStack", { screen: "ViewAll" })
          }
        >
          <Text style={styles.blueButtonText}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width > 328 ? 350 : 310,
    height: 157,
    backgroundColor: colors.white,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    overflow: "hidden",
  },
  blueButton: {
    width: "100%",
    height: 45,
    backgroundColor: colors.view_all_bg,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  blueButtonText: {
    color: colors.view_text_color,
  },
});

export default SNFrame;
