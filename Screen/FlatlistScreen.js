import react from 'React';
import {Text, View, StyleSheet, FlatList, Image } from 'react-native';

const daftarData = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
]

const FlatlistScreen = () => {
    return(
        <flatList
        data={daftarData}
        renderItem={({item}) =>
            <View>
                <Text>
                    {item.userId}
                </Text>
                <Text>
                    {item.title}
                </Text>
            </View>
        }
        keyExtractor ={item => item.userId}
        />
    )
}

const styles = StyleSheet.create({

})

export default FlatlistScreen;