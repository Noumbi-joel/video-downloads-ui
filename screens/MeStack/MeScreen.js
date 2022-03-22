import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//icons and images
import params from "../../assets/png/params.png";
import premium from "../../assets/png/premium.png";
import wc from "../../assets/png/whatsapp_1.png";
import trash from "../../assets/png/trash.png";
import boost from "../../assets/png/boost.png";
import battery from "../../assets/png/battery.png";
import app_manager from "../../assets/png/app_manager.png";
import files from "../../assets/png/files.png";
import account_pic from "../../assets/png/account_img.png";

import ytb from "../../assets/png/ytb.png";
import share from "../../assets/png/share.png";
import heart from "../../assets/png/heart.png";
import about from "../../assets/png/about.png";
import version from "../../assets/png/newVersion.png";
import arrow_right from "../../assets/png/arrow_right.png";

import edit_img from "../../assets/png/edit_acc_img.png";

import { Feather } from "@expo/vector-icons";
import colors from "../../utils/colors";

const MeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#fff",
          padding: 5,
          width: 330,
          alignSelf: "center",
          borderRadius: 12,
        }}
      >
        <Image source={account_pic} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Sadek Hossen Rony
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: colors.search_bar_text }}>
              Profile{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("profile")}
            >
              <Feather
                name="arrow-right-circle"
                size={24}
                color={colors.search_bar_text}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={params} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image
          source={premium}
          style={{ alignSelf: "center", marginTop: 20 }}
        />
      </TouchableOpacity>

      <View
        style={{
          height: 1,
          alignSelf: "center",
          backgroundColor: colors.grey_text,
          width: 325,
          marginVertical: 20,
        }}
      ></View>

      <View
        style={{
          alignSelf: "center",
          width: 325,
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "column",
            margin: 10,
            alignItems: "center",
            width: 85,
          }}
        >
          <Image source={boost} />
          <Text style={styles.meText}>Boost</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "column",
            margin: 10,
            alignItems: "center",
            width: 85,
          }}
        >
          <Image source={trash} />
          <Text style={{ fontWeight: "bold", color: "red", fontSize: 18 }}>
            1.94GB
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "column",
            margin: 10,
            alignItems: "center",
            width: 85,
          }}
        >
          <Image source={app_manager} />
          <Text style={styles.meText}>App Manager</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "column",
            margin: 10,
            alignItems: "center",
            width: 85,
          }}
        >
          <Image source={files} />
          <Text style={styles.meText}>Files</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "column",
            margin: 10,
            alignItems: "center",
            width: 85,
          }}
        >
          <Image source={battery} />
          <Text style={styles.meText}>Battery Saver</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "column",
            margin: 10,
            alignItems: "center",
            width: 85,
          }}
        >
          <Image source={wc} />
          <Text style={styles.meText}>WA Cleaner</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 250,
          alignSelf: "center",
          flexWrap: "wrap",
        }}
      >
        <TouchableOpacity
          style={{
            width: 325,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={ytb} />
            <Text
              style={{
                color: colors.videoPicSndTextColor,
                fontSize: 18,
                marginLeft: 20,
              }}
            >
              Youtube Library
            </Text>
          </View>
          <Image source={arrow_right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 325,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={share} />
            <Text
              style={{
                color: colors.videoPicSndTextColor,
                fontSize: 18,
                marginLeft: 20,
              }}
            >
              Share SnapTube
            </Text>
          </View>
          <Image source={arrow_right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 325,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={heart} />
            <Text
              style={{
                color: colors.videoPicSndTextColor,
                fontSize: 18,
                marginLeft: 20,
              }}
            >
              Follow Us
            </Text>
          </View>
          <Image source={arrow_right} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 325,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={about} />
            <Text
              style={{
                color: colors.videoPicSndTextColor,
                fontSize: 18,
                marginLeft: 20,
              }}
            >
              About
            </Text>
            <Image source={version} style={{ marginLeft: 10 }} />
          </View>
          <Image source={arrow_right} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meText: {
    fontSize: 18,
    color: colors.search_bar_text,
    textAlign: "center",
  },
});

export default MeScreen;
