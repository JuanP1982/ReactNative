import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function MovieCard({filmes}) {
   const navigation = useNavigation()

    const renderListaLateralItem = ({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("MoviePage", { Title: item.Title })}
          style={styles.listaLateralItem}
        >
          <Image
            resizeMode="stretch"
            style={styles.listaLateralPoster}
            source={{ uri: item.Poster }}
          />
          <Text style={styles.listaLateralTitle}>{item.Title}</Text>
        </TouchableOpacity>
      );
    return (
    <View style={styles.listaLateral}>
          <Text style={styles.sectionTitle}>Outros Filmes</Text>
          <FlatList
            data={filmes}
            renderItem={renderListaLateralItem}
            keyExtractor={(item) => item.imdbID}
          />
        </View>
  )
}