import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageDetail =({imageSource})=>{
    return(
        <View>
            <Image
                source={imageSource}
                style={{ height: 1920, width: 1280}}
            />
        </View>
    )
}

export default ImageDetail;