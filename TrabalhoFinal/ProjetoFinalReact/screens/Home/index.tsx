import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import MoviePage from "../MoviePage";
import Banner from "../../components/Banner";
import MovieCard from "../../components/MovieCard";

// import Card from "../Card";

export default function Home() {
  const navigation = useNavigation();
  const [filmes, setFilmes] = useState([
    {
      imdbID: "tt0120737",
      Title: "Cruella",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2Fo9Nb7bLdyILFYbMZKtEnu-659zCT9DYw&usqp=CAU",
    },
    {
      imdbID: "tt0167261",
      Title: "Raya and the Last Dragon",
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

  useEffect(()=>{
    if(busca.length === 0){
      catalogo()
    }
  },[busca])

  

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
          source={require("../../assets/favicon.png")}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar filmes"
          placeholderTextColor="#ccc"
          onChangeText={(text) => setBusca(text)}
        />
        <TouchableOpacity style={styles.button} onPress={obterFilmes}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Banner></Banner>
        <MovieCard filmes={filmes}></MovieCard>
        
      </ScrollView>
    </View>
  );
}
