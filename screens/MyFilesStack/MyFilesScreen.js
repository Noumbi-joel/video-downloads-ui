import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import colors from "../../utils/colors";
//components
import MyFileItem from "../../components/MyFileItem";
import MyFilesSlider from "../../components/MyFilesSlider";

//images and icons
import mp3 from "../../assets/png/dwnld_pic_4_myfiles.png";
import mp4_1 from "../../assets/png/dwnld_pic_3_myfiles.png";
import mp4_2 from "../../assets/png/dwnld_pic_2_myfiles.png";
import mp4_3 from "../../assets/png/dwnld_pic_1_myfiles.png";
import mp4_4 from "../../assets/png/dwnld_pic_myfiles.png";

import v_mp4_1 from "../../assets/png/videos_myfiles_1.png";
import v_mp4_2 from "../../assets/png/videos_myfiles_2.png";
import v_mp4_3 from "../../assets/png/videos_myfiles_3.png";
import v_mp4_4 from "../../assets/png/videos_myfiles_4.png";
import v_mp4_5 from "../../assets/png/videos_myfiles_5.png";
import v_mp4_6 from "../../assets/png/videos_myfiles_6.png";

const MyFilesScreen = (props) => {
  const [dwnld, setDwnld] = useState(true);
  const [music, setMusic] = useState(false);
  const [videos, setVideos] = useState(false);
  return (
    <View style={styles.container}>
      <MyFilesSlider
        {...props}
        setDwnld={setDwnld}
        setMusic={setMusic}
        setVideos={setVideos}
        categories={[
          { text: "Download", isActive: dwnld, to: "download" },
          { text: "Music", isActive: music, to: "music" },
          { text: "Videos", isActive: videos, to: "videos" },
        ]}
      />
      <ScrollView>
        {dwnld && (
          <>
            <MyFileItem img={mp3} />
            <MyFileItem img={mp4_1} />
            <MyFileItem img={mp4_2} />
            <MyFileItem img={mp4_3} />
            <MyFileItem img={mp4_4} />
          </>
        )}

        {music && (
          <>
            <MyFileItem img={mp3} />
            <MyFileItem img={mp3} />
            <MyFileItem img={mp3} />
            <MyFileItem img={mp3} />
            <MyFileItem img={mp3} />
          </>
        )}

        {videos && (
          <>
            <MyFileItem img={v_mp4_1} />
            <MyFileItem img={v_mp4_2} />
            <MyFileItem img={v_mp4_3} />
            <MyFileItem img={v_mp4_4} />
            <MyFileItem img={v_mp4_5} />
            <MyFileItem img={v_mp4_6} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  audioDesc: {
    color: colors.search_bar_text,
    fontWeight: "400",
  },
  dwnldText: {
    color: "#151515",
    fontWeight: "bold",
    width: 200,
  },
  myfilesItem: {
    width: "100%",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MyFilesScreen;
