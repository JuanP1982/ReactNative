import React, { useState } from "react";
import { getProdutos } from "../../service/filmes";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

// import Card from "../Card";

const renderListaLateralItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => alert(`testando ${item.Title}`)}
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

export default function Home() {
  const [filmes, setFilmes] = useState([
    {
      imdbID: "tt0120737",
      Title: "Cruella",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2Fo9Nb7bLdyILFYbMZKtEnu-659zCT9DYw&usqp=CAU",
    },
    {
      imdbID: "tt0167261",
      Title: "Raya",
      Poster:
        "https://lumiere-a.akamaihd.net/v1/images/1920x1080_logo_355fcbfc.png",
    },
    {
      imdbID: "tt0167262",
      Title: "Luca",
      Poster:
        "https://img.odcdn.com.br/wp-content/uploads/2021/06/original_1622571176_Luca_Poster.jpg",
    },
  ]);
  const [busca, setBusca] = useState("");
  const [filmesInicio, setFilmesInicio] = useState(filmes);
  const [filmesPesquisados, setFilmesPesquisados] = useState([]);
  const obterFilmes = async () => {
    const filmesFiltrados = filmes.filter((filme) =>
      filme.Title.toLowerCase().includes(busca.toLowerCase())
    );

    if (filmesFiltrados.length > 0) {
      setFilmes(filmesFiltrados);
      return;
    }

    try {
      const res = await getProdutos(busca);
      const filmeEncontrado = {
        imdbID: res.data.imdbID,
        Title: res.data.Title,
        Poster: res.data.Poster,
      };

      setFilmes([filmeEncontrado]);
      setFilmesPesquisados([...filmesPesquisados, filmeEncontrado]);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const catalogo = () => {
    setFilmes([...filmesInicio, ...filmesPesquisados]);
    setBusca("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/disney-logo.png")}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar filmes"
          placeholderTextColor="#ccc"
          onChangeText={(text) => setBusca(text)}
        />
        <Button title="Buscar" onPress={obterFilmes} />
        <Button title="Inicio" onPress={catalogo} />
      </View>
      <ScrollView>
        <View style={styles.encarte}>
          <Text style={styles.sectionTitle}>Filme em Destaque</Text>
          <FlatList
            horizontal
            data={[
              { key: "1", image: require("../../assets/dug.jpeg") },
              { key: "2", image: require("../../assets/ron.jpeg") },
              { key: "3", image: require("../../assets/red.jpeg") },
              { key: "4", image: require("../../assets/raya.jpeg") },
            ]}
            renderItem={({ item }) => (
              <Image style={styles.banner} source={item.image} />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>

        <View style={styles.listaLateral}>
          <Text style={styles.sectionTitle}>Outros Filmes</Text>
          <FlatList
            data={filmes}
            renderItem={renderListaLateralItem}
            keyExtractor={(item) => item.imdbID}
          />
        </View>
      </ScrollView>
    </View>
  );
}
