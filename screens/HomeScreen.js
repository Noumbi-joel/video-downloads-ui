import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

//components
import SearchBar from '../components/SearchBar';
import SNFrame from '../components/SNFrame';
import CategoriesSlider from '../components/CategoriesSlider';

//images
import search from "../assets/png/search.png";
import sing from "../assets/png/sing.png";
import crossedLogo from "../assets/png/crossedlogo.png";
import separator from "../assets/png/separator.png";

import whatsapp from "../assets/png/whatsapp.png";
import facebook from "../assets/png/facebook.png";
import instagram from "../assets/png/instagram.png";
import youtube from "../assets/png/youtube.png";

//Constants
import Constants from 'expo-constants';
//colors
import colors from '../utils/colors';

const HomeScreen = () => {
  return <View style={styles.container}>
        <SearchBar logos={[search, sing, crossedLogo, separator]} label="Search or enter web address" />
        <SNFrame logos={[
            {name: whatsapp, color: colors.wsp_bg, logoName: "WhatsApp"}, 
            {name:facebook, color: colors.fb_bg, logoName: "Facebook"}, 
            {name:instagram, color: colors.istg_bg, logoName: "Instagram"},
            {name:youtube, color: colors.yt_bg, logoName: "Youtube"}
        ]}/>
        <CategoriesSlider categories={[
            {text: "sub", isActive: false},
            {text: "for you", isActive: false},
            {text: "music", isActive: false},
            {text: "trending", isActive: false},
            {text: "channels", isActive: false}
        ]} />
        
  </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    } 
})

export default HomeScreen;
