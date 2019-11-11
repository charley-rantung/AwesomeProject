import React from 'react';
import { View, Text, Image } from 'react-native';
import ImagesDetail from '../Components/ImagesDetail';

const ImageScreen = () => {
    return(
        <View>
            <ImagesDetail
                imageSource={require('../assets/Screenshot.png')}
            />
        </View>
    )
}

export default ImageScreen;