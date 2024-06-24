import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";

// import Card from "../Card";

const generateFilmesData = () => {
  return [
    {
      imdbID: "tt0120737",
      Title: "Cruella",
      Poster: require("../../assets/cruella.jpeg"),
    },
    {
      imdbID: "tt0167261",
      Title: "Raya",
      Poster: require("../../assets/raya.jpeg"),
    },
    {
      imdbID: "tt0167262",
      Title: "Luca",
      Poster: require("../../assets/luca.jpeg"),
    },
  ];
};

const renderListaLateralItem = ({ item }) => (
  <View style={styles.listaLateralItem}>
    <Image style={styles.listaLateralPoster} source={item.Poster} />
    <Text style={styles.listaLateralTitle}>{item.Title}</Text>
  </View>
);

export default function Home() {
  const [filmes, setFilmes] = useState(generateFilmesData());
  const [busca, setBusca] = useState("");

  const obterFilmes = () => {
    const filmesFiltrados = generateFilmesData().filter((filme) =>
      filme.Title.toLowerCase().includes(busca.toLowerCase())
    );
    setFilmes(filmesFiltrados);
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
      </View>
      <ScrollView>
        <View style={styles.encarte}>
          <Text style={styles.sectionTitle}>Filme em Destaque</Text>
          <Image
            style={styles.banner}
            source={require("../../assets/dug.jpeg")}
          />
        </View>
        <View style={styles.listaLateral}>
          <Text style={styles.sectionTitle}>Outros Filmes</Text>
          <FlatList
            data={filmes}
            renderItem={renderListaLateralItem}
            keyExtractor={(item) => item.imdbID}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    color: "#fff",
    marginRight: 10,
  },
  encarte: {
    marginBottom: 20,
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
  listaLateral: {
    marginBottom: 20,
    width: "90%",
  },
  listaLateralItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listaLateralPoster: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
});
