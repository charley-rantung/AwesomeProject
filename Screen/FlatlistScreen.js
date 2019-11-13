import React from 'react';
import {Text, View, StyleSheet, FlatList, Image } from 'react-native';

const daftarData = [
      { lokasi: 'Perum 1 SBY', harga: 50000000},
      { lokasi: 'Perum 2 SBY', harga: 67000000},
      { lokasi: 'Perum 3 SBY', harga: 82000000},
      { lokasi: 'Perum 4 SBY', harga: 89500000},
      { lokasi: 'Perum Matungkas', harga: 57250000},
      { lokasi: 'Perum Agape', harga: 142000000},
      { lokasi: 'Perum Student Hill', harga: 1307500002}
];

const FlatlistScreen = () => {
    return(
        <FlatList
          data={daftarData}
          renderItem={({item}) =>
              <View style = {{marginTop: 150, width: 150, backgroundColor: 'yellow', borderRadius: 150, alignSelf: 'center'}}>
                  <Text style = {{textAlign: 'center'}}>
                      {item.lokasi}
                  </Text>
                  <Text style = {{textAlign: 'center'}}>
                      {item.harga}
                  </Text>
              </View>
          }
          keyExtractor ={item => item.lokasi}
        />
    );
};

const styles = StyleSheet.create({

})

export default FlatlistScreen;