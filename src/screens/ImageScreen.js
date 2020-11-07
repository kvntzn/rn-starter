import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Horse"/>
            <ImageDetail title="Dog"/>
            <ImageDetail title="Cat"/>
            <ImageDetail title="Chicken"/>
        </View>);
};

const styles = StyleSheet.create({});

export default ImageScreen;