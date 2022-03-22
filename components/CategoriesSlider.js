import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

//colors
import colors from "../utils/colors";

const CategoriesSlider = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.content}>
        {props.categories.map((item, index) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(item.to)}
            style={[
              styles.catContainer,
              item.isActive ? styles.activeBtnNav : {},
            ]}
            key={index}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    width: Dimensions.get("window").width > 328 ? 350 : 310,
    height: 52,
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
  },
  catContainer: {
    margin: 5,
    borderWidth: 1,
    borderColor: colors.dec_border_link,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  activeBtnNav: {
    borderWidth: 2,
    backgroundColor: colors.bg_link,
    borderColor: colors.border_link,
  },
});

export default CategoriesSlider;
