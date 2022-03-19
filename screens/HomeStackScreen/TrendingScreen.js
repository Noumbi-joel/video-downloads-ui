import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Constants from "expo-constants";

//components
import SearchBar from "../../components/SearchBar";
import CategoriesSlider from "../../components/CategoriesSlider";
import VideoPost from "../../components/VideoPost";

//images
import search from "../../assets/png/search.png";
import sing from "../../assets/png/sing.png";
import crossedLogo from "../../assets/png/crossedlogo.png";
import separator from "../../assets/png/separator.png";

import cretin from "../../assets/png/cretin.png";
import tintin from "../../assets/png/tintin.png";
import YellowLike from "../../assets/png/yellow_like.png";
import lg_img_sub_2 from "../../assets/png/lg_img_sub_2.png";

const TrendingScreen = (props) => {
  const [active, setIsActive] = useState(false);
  const videosPics = [cretin, lg_img_sub_2];

  useEffect(() => {
    if (props.route.name === "trending") setIsActive(true);
  }, []);
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
          { text: "for you", isActive: false, to: "forYou" },
          { text: "music", isActive: false, to: "music" },
          { text: "trending", isActive: active, to: "trending" },
          { text: "channels", isActive: false, to: "channels" },
        ]}
      />

      <ScrollView>
        {videosPics.map((item, index) => (
          <VideoPost
            videoPic={{
              name: item,
              userLogo: tintin,
              videoTitlePg: "How to design a Mobile App",
              videoTitleSndPg: "interface with Figma #Sadek",
              channelName: "SADEK Tut's",
              dateReleaseExpire: "5 days ago",
              yellowLike: YellowLike,
            }}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default TrendingScreen;
