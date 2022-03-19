import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";

import colors from "../../utils/colors";

//components
import CategoriesSlider from "../../components/CategoriesSlider";
import SearchBar from "../../components/SearchBar";
import ChannelCategory from "../../components/ChannelCategory";

//images
import search from "../../assets/png/search.png";
import sing from "../../assets/png/sing.png";
import crossedLogo from "../../assets/png/crossedlogo.png";
import separator from "../../assets/png/separator.png";

import yt from "../../assets/png/yt.png";
import music from "../../assets/png/music.png";
import sports from "../../assets/png/sports.png";
import liveChat from "../../assets/png/liveChat.png";
import news from "../../assets/png/news.png";

import sub_1 from "../../assets/png/subscriber_1.png";
import sub_2 from "../../assets/png/subscriber_2.png";
import sub_3 from "../../assets/png/subscriber_3.png";
import sub_4 from "../../assets/png/subscriber_4.png";
import sub_5 from "../../assets/png/subscriber_5.png";
import sub_6 from "../../assets/png/subscriber_6.png";
import sub_7 from "../../assets/png/subscriber_7.png";

const ChannelsScreen = (props) => {
  const [active, setIsActive] = useState(false);

  const socialNetworks = [
    { name: "Youtube", img: yt },
    { name: "Music", img: music },
    { name: "sports", img: sports },
    { name: "live Chat", img: liveChat },
    { name: "News", img: news },
  ];

  const beautAndFash = [
    { name: "Youlanda Renee", img: sub_1 },
    { name: "Cheree Dollface", img: sub_2 },
    { name: "Danielle Mansutti", img: sub_3 },
    { name: "Beardbrand", img: sub_4 },
  ];

  const islamic = [
    { name: "Bassera", img: sub_5 },
    { name: "An Nafee", img: sub_6 },
    { name: "Baraque", img: sub_7 },
  ];

  useEffect(() => {
    if (props.route.name === "channels") setIsActive(true);
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
          { text: "trending", isActive: false, to: "trending" },
          { text: "channels", isActive: active, to: "channels" },
        ]}
      />
      <ScrollView horizontal={true}>
        {socialNetworks.map((item, index) => (
          <View
            key={index}
            style={{
              marginHorizontal: 10,
              marginBottom: 60,
              alignItems: "center",
            }}
          >
            <Image source={item.img} />
            <Text style={{ color: colors.search_bar_text, fontSize: 18 }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={{ marginLeft: 5 }}>
        <ChannelCategory
          catName="Beautiful & Fashion"
          beautAndFash={beautAndFash}
        />
        <ChannelCategory
          catName="Islamic Knowledge"
          beautAndFash={islamic}
        />
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

export default ChannelsScreen;
