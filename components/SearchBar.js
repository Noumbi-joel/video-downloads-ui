import React, {useEffect} from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import colors from '../utils/colors';

const SearchBar = ({logos, label}) => {
    useEffect(() => {
        console.log(Dimensions.get("window").width);
    }, [])
  return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
            <TouchableOpacity>
                <Image source={logos[0]} />
            </TouchableOpacity> 
            <TextInput style={styles.textInput} placeholder={label} />  
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
        marginVertical: 10
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
