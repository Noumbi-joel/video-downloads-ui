import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//Constants
import Constants from "expo-constants"

//images
import arrowLeft from "../assets/png/arrow_left.png";
import sing from "../assets/png/sing.png";
import crossedLogo from "../assets/png/crossedlogo.png";
import separator from "../assets/png/separator.png";

import whatsapp from "../assets/png/whatsapp.png";
import facebook from "../assets/png/facebook.png";
import instagram from "../assets/png/instagram.png";
import youtube from "../assets/png/youtube.png";
import redBall from "../assets/png/red_ball.png";
import dotBar from "../assets/png/dot_bar.png";

//colors
import colors from '../utils/colors';

//components
import SearchBar from '../components/SearchBar';
import SNFrame from '../components/SNFrame';

const ViewAllScreen = (props) => {
    const logos = [arrowLeft, sing, crossedLogo, separator];
  return (
    <View style={styles.container}>
        <SearchBar goBack navigation={props.navigation} logos={logos} label="Search or enter web address" />
        <SNFrame noScroll noBtn {...props} logos={[
            {name: whatsapp, color: colors.wsp_bg, logoName: "WhatsApp"}, 
            {name:facebook, color: colors.fb_bg, logoName: "Facebook"}, 
            {name:instagram, color: colors.istg_bg, logoName: "Instagram"},
            {name:youtube, color: colors.yt_bg, logoName: "Youtube"},
            {name:dotBar, color: colors.dribble_bg, logoName: "Drib bble"},
            {name:redBall, color: colors.border_link, logoName: "add web"},
        ]}/>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
});

export default ViewAllScreen;
