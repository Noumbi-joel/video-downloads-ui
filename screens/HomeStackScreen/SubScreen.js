import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Constants from "expo-constants";

//components
import SearchBar from "../../components/SearchBar";
import CategoriesSlider from "../../components/CategoriesSlider";

//images
import search from "../../assets/png/search.png";
import sing from "../../assets/png/sing.png";
import crossedLogo from "../../assets/png/crossedlogo.png";
import separator from "../../assets/png/separator.png";
import userOn1 from "../../assets/png/user_online_1.png";
import userOn2 from "../../assets/png/user_online_2.png";
import userOn3 from "../../assets/png/user_online_3.png";
import userOn4 from "../../assets/png/user_online_4.png";

const SubScreen = (props) => {
  return (
    <View style={styles.container}>
      <SearchBar
        logos={[search, sing, crossedLogo, separator]}
        label="Search or enter web address"
      />
      <CategoriesSlider
        {...props}
        categories={[
          { text: "sub", isActive: false, to: "sub" },
          { text: "for you", isActive: true, to: "forYou" },
          { text: "music", isActive: false, to: "music" },
          { text: "trending", isActive: false, to: "trending" },
          { text: "channels", isActive: false, to: "channels" },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default SubScreen;
