import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//components
import SearchBar from '../components/SearchBar';
import SNFrame from '../components/SNFrame';
import CategoriesSlider from '../components/CategoriesSlider';
import VideoPost from '../components/VideoPost';

//images
import search from "../assets/png/search.png";
import sing from "../assets/png/sing.png";
import crossedLogo from "../assets/png/crossedlogo.png";
import separator from "../assets/png/separator.png";
import firstHomePic from "../assets/png/first_home_pic.png";
import sndHomePic from "../assets/png/snd_home_pic.png";
import duke from "../assets/png/duke.png";
import YellowLike from "../assets/png/yellow_like.png";

import whatsapp from "../assets/png/whatsapp.png";
import facebook from "../assets/png/facebook.png";
import instagram from "../assets/png/instagram.png";
import youtube from "../assets/png/youtube.png";
import redBall from "../assets/png/red_ball.png";
import dotBar from "../assets/png/dot_bar.png";

//Constants
import Constants from 'expo-constants';

//colors
import colors from '../utils/colors';

const HomeScreen = (props) => {
    const videosPics = [firstHomePic, sndHomePic];

    useEffect(() => {
        console.log(props);
    }, []);

  return (
    <View style={styles.container}>
        <SearchBar logos={[search, sing, crossedLogo, separator]} label="Search or enter web address" />
        <SNFrame {...props} logos={[
            {name: whatsapp, color: colors.wsp_bg, logoName: "WhatsApp"}, 
            {name:facebook, color: colors.fb_bg, logoName: "Facebook"}, 
            {name:instagram, color: colors.istg_bg, logoName: "Instagram"},
            {name:youtube, color: colors.yt_bg, logoName: "Youtube"},
            {name:dotBar, color: colors.dribble_bg, logoName: "Drib bble"},
            {name:redBall, color: colors.border_link, logoName: "add web"},
        ]}/>
        <CategoriesSlider categories={[
            {text: "sub", isActive: false},
            {text: "for you", isActive: false},
            {text: "music", isActive: false},
            {text: "trending", isActive: false},
            {text: "channels", isActive: false}
        ]} />
        <ScrollView>
            {
                videosPics.map((item, index) => <VideoPost videoPic={{
                    name: item, 
                    userLogo: duke, 
                    videoTitlePg: 'How to design a Mobile App', 
                    videoTitleSndPg: 'interface with Figma #Sadek', 
                    channelName:"SADEK Tut's", 
                    dateReleaseExpire:"5 days ago", 
                    yellowLike: YellowLike
                }} 
                    key={index} 
                />)
            }
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    } 
})

export default HomeScreen;
