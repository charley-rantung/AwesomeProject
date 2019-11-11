//import yang wajib
import React from 'react';
//import komponen dari library react native
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//import file komponen dari direktori tertentu
import ComponentScreen from './Screen/ComponentScreen';
import ImageScreen from './Screen/ImageScreen';
import FlatlistScreen from './Screen/FlatlistScreen';

//tempat koding untuk ditampilkan di layar
export default function App() {
  return (
    <View>
      <Text>
        <FlatlistScreen/>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 90,
  }
});
