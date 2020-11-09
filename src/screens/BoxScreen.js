import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        alignItems: "stretch",
        justifyContent: "space-between",
        flexDirection: "row",
        borderColor: 'black',
        borderWidth: 3
    },
    viewOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'pink',
        width: 100,
        height: 100
    },
    viewTwoStyle: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        width: 100,
        height: 100,
        alignSelf: "flex-end"
    },
    viewThreeStyle: {
        borderWidth: 3,
        borderColor: 'violet',
        backgroundColor: 'plum',
        width: 100,
        height: 100
    }
});

export default BoxScreen; 