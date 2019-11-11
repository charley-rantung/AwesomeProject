//import yang wajib
import React from 'react';
//import komponen dari library react native
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//import file komponen dari direktori tertentu
import ComponentScreen from './Screen/ComponentScreen';
import ImageScreen from './Screen/ImageScreen';

//tempat koding untuk ditampilkan di layar
export default function App() {
  return (
    <View>
      <Text style={styles.text}>
      //styling dengan memanggil objek test
      </Text>
      
      <Text style={{ fontSize: 30 }}>
      //styling dengan setelan manual
      </Text>
    </View>
  );
}

//
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
