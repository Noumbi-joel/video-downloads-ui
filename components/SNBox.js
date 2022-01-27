import React from 'react';
import { View, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';
import colors from '../utils/colors';


const SNBox = ({logo, color, name, noScroll}) => {
  return <TouchableOpacity style={[styles.container, {backgroundColor: color}, noScroll?{}:{}]}>
      <Image source={logo} />
      <Text style={styles.logoName}>{name}</Text>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
    container: {
        width: 72, 
        height: 70, 
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoName: {
        color: colors.sn_text_color,
        fontSize: 12,
        marginTop: 5
    }
})

export default SNBox;
