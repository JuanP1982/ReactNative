import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Banner() {
  const navigation = useNavigation() 
    return (
    <View style={styles.encarte}>
          <Text style={styles.sectionTitle}>Filme em Destaque</Text>
          <FlatList
            horizontal
            data={[
              {
                key: "1",
                Title: "Dug Days",
                image: require("../../assets/dug.jpeg"),
              },
              {
                key: "2",
                Title: "Ron's Gone Wrong",
                image: require("../../assets/ron.jpeg"),
              },
              {
                key: "3",
                Title: "Turning Red",
                image: require("../../assets/red.jpeg"),
              },
              {
                key: "4",
                Title: "Raya and the Last Dragon",
                image: require("../../assets/raya.jpeg"),
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MoviePage", { Title: item.Title })
                }
              >
                <Image style={styles.banner} source={item.image} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
  )
}