import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

//components
import SNBox from './SNBox';

const SNFrame = ({logos}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{flex: 0.3}}>
        {
          logos.map((item, index) => <SNBox logo={item.name} color={item.color} name={item.logoName} key={index} />)
        }
      </ScrollView>
      <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.blueButtonText}>View all</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: 290,
    height: 157,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10
  },
  blueButton: {
    width: 270,
    height: 45,
    backgroundColor: colors.view_all_bg,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  blueButtonText: {
    color: colors.view_text_color,
  }
}) 

export default SNFrame;
