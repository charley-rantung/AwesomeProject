import React from 'react';
import {Text, StyleSheet, View, Flatlist, Image} from 'react-native';

const ComponentScreen=()=> {
    return(
        <View>
            <Text style={Style.contohtext}>
                Apa so ngana
            </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    contohtext: {
        fontSize: 40,
        color: 'red',
    }
})

export default ComponentScreen;
