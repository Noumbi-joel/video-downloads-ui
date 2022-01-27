import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import colors from '../utils/colors';

const SearchBar = ({logos, label, goBack, navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => goBack ? navigation.goBack() : ''}>
                <Image source={logos[0]} />
            </TouchableOpacity> 
            <TextInput style={styles.textInput} style={{marginHorizontal: 15}} placeholder={label} />  
            <Image source={logos[3]} style={{marginRight: 10}} />
            <TouchableOpacity>
                <Image source={logos[1]} />
            </TouchableOpacity> 
            <TouchableOpacity>
                <Image source={logos[2]} />
            </TouchableOpacity>
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        width: Dimensions.get("window").width > 328?350:310,
        height: 52,
        borderRadius: 16
    },
    textInput: {
        width: 165,
        height: 16,
        fontSize: 12
    }
})

export default SearchBar;
