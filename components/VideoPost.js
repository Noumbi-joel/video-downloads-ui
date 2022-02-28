import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

//colors
import colors from "../utils/colors";

const VideoPost = ({ videoPic }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={videoPic.name} style={{ width: "100%" }} />
      </View>
      <View style={styles.footerInfos}>
        <View style={{ flexDirection: "row" }}>
          <Image source={videoPic.userLogo} />
          <View>
            <View style={{ flexDirection: "column", marginLeft: 5 }}>
              <Text
                style={{ fontWeight: "bold", color: colors.videoPicTextColor }}
              >
                {videoPic.videoTitlePg}
              </Text>
              <Text
                style={{ fontWeight: "bold", color: colors.videoPicTextColor }}
              >
                {videoPic.videoTitleSndPg}
              </Text>
            </View>
            <Text style={{ marginLeft: 5, color: colors.videoPicSndTextColor }}>
              {videoPic.channelName} . {videoPic.dateReleaseExpire}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.border_link,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Image source={videoPic.yellowLike} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    marginTop: 10,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  footerInfos: {
    marginHorizontal: 15,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default VideoPost;
