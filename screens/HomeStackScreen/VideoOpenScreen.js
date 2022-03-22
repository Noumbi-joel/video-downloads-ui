import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView
} from "react-native";

//images and icons
import pausedVideo from "../../assets/png/paused_video.jpg";
import downArrow from "../../assets/png/down_arrow.png";
import dwnldBtn from "../../assets/png/dwnld_btn.png";
import shareBtn from "../../assets/png/share_btn.png";
import cretinLogo from "../../assets/png/cretin_logo.png";
import firstHomePic from "../../assets/png/first_home_pic.png";
import sndHomePic from "../../assets/png/snd_home_pic.png";
import duke from "../../assets/png/duke.png";
import YellowLike from "../../assets/png/yellow_like.png";

import colors from "../../utils/colors";
import VideoPost from "../../components/VideoPost";

const VideoOpenScreen = (props) => {
  const videosPics = [firstHomePic, sndHomePic];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Image source={pausedVideo} />
      </TouchableOpacity>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginVertical: 15,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                width: 280,
                color: colors.sn_text_color,
              }}
            >
              THE MALHAMA - ARMAGEDDON (FINAL BATTLE)
            </Text>
            <Text style={{ color: colors.search_bar_text }}>6.5M views</Text>
          </View>
          <TouchableOpacity>
            <Image source={downArrow} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity>
            <Image source={dwnldBtn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={shareBtn} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: 5,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image source={cretinLogo} />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Ann Nafee
              </Text>
              <Text style={{ color: colors.search_bar_text }}>
                2.35M subscribers
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: colors.border_link,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Subscribe
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#000",
            }}
          >
            Up Next
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: colors.search_bar_text }}>Autoplay</Text>
            <Switch style={{ width: 50 }} />
          </View>
        </View>
        {videosPics.map((item, index) => (
          <VideoPost
            {...props}
            videoPic={{
              name: item,
              userLogo: duke,
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoOpenScreen;
