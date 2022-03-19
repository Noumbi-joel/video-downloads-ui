import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

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
import YellowLike from "../../assets/png/yellow_like.png";

import uploader from "../../assets/png/uploader_1.png";
import lg_img_sub from "../../assets/png/lg_img_sub.png";
import lg_img_sub_two from "../../assets/png/lg_img_sub_2.png";
import userOne from "../../assets/png/user_online_1.png";
import userTwo from "../../assets/png/user_online_2.png";
import userThree from "../../assets/png/user_online_3.png";
import userFour from "../../assets/png/user_online_4.png";
import colors from "../../utils/colors";

const SubScreen = (props) => {
  const onlinePics = [userOne, userTwo, userThree, userFour];
  const videosPics = [lg_img_sub, lg_img_sub_two];
  
  const [active, setIsActive] = useState(false);

  useEffect(() => {
    if(props.route.name === 'sub') setIsActive(true)
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
          { text: "sub", isActive: active, to: "sub" },
          { text: "for you", isActive: false, to: "forYou" },
          { text: "music", isActive: false, to: "music" },
          { text: "trending", isActive: false, to: "trending" },
          { text: "channels", isActive: false, to: "channels" },
        ]}
      />

      <ScrollView
        horizontal={true}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {onlinePics.map((item, index) => (
          <View
            key={index}
            style={{
              paddingTop: 20,
              marginHorizontal: 5,
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <Image source={item} />
            <Text>Ann Nafee</Text>
          </View>
        ))}
        <AntDesign name="arrowright" size={32} color={colors.grey_text} />
      </ScrollView>

      <ScrollView>
        {videosPics.map((item, index) => (
          <VideoPost
            videoPic={{
              name: item,
              userLogo: uploader,
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

export default SubScreen;
