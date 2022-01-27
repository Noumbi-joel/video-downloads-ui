import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

//colors
import colors from '../utils/colors';

const CategoriesSlider = ({categories}) => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={styles.content}>
            {
                categories.map((item, index) => (
                    <TouchableOpacity style={styles.catContainer} key={index}>
                        <Text >{item.text}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        width: Dimensions.get("window").width > 328 ?350:310,
        height: 52,
        borderRadius: 15,
        padding: 10,
        marginVertical: 10
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    catContainer: {
        margin: 5,
        borderWidth: 1,
        borderColor: colors.dec_border_link,
        borderRadius: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
    }
})

export default CategoriesSlider;
