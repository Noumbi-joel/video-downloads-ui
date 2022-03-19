import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Constants from "expo-constants";

//images
import search from "../../assets/png/search.png";
import sing from "../../assets/png/sing.png";
import crossedLogo from "../../assets/png/crossedlogo.png";
import separator from "../../assets/png/separator.png";
import music_1 from "../../assets/png/music_1.png";
import music_2 from "../../assets/png/music_2.png";
import music_3 from "../../assets/png/music_3.png";

//components
import MusicHit from "../../components/MusicHit";
import CategoriesSlider from "../../components/CategoriesSlider";
import SearchBar from "../../components/SearchBar";

const MusicScreen = (props) => {
  const [active, setIsActive] = useState(false);

  useEffect(() => {
    if (props.route.name === "music") setIsActive(true);
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
          { text: "music", isActive: active, to: "music" },
          { text: "trending", isActive: false, to: "trending" },
          { text: "channels", isActive: false, to: "channels" },
        ]}
      />
      <Text style={styles.textStyle}>Today's Biggest Hits</Text>
      <ScrollView>
        <MusicHit
          hit_img={music_1}
          hit_name="Bollywood Hitlist"
          hit_description="Today’s bigest hits and hottest tracks rom across the korean Music Landscape."
          track_nb="34 tracks"
        />
        <MusicHit
          hit_img={music_2}
          hit_name="Baby Limlist"
          hit_description="Today’s bigest hits and hottest tracks rom across the korean Music Landscape."
          track_nb="34 tracks"
        />
        <MusicHit
          hit_img={music_3}
          hit_name="Pop Song Hitlist"
          hit_description="Today’s bigest hits and hottest tracks rom across the korean Music Landscape."
          track_nb="34 tracks"
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

export default MusicScreen;
