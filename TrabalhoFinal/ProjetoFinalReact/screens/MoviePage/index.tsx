import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { getProdutos } from "../../service/filmes";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import styles from "./styles";

export default function MoviePage({ route }) {
  const navigation = useNavigation();
  const [filme, setFilme] = useState({});
  const { Title } = route.params;
  const [user, setUser] = useState({});
  const [favoritos, setFavoritos] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current; // Inicializa com 0 (invisível)

  useEffect(() => {
    getProdutos(Title)
      .then((res) => setFilme(res.data))
      .catch((err) => console.log("Erro!", err));
    getUser();
  }, []);

  useEffect(() => {
    if (user && user.favoritos) {
      setFavoritos(user.favoritos);
    }
  }, [user]);

  async function getUser() {
    try {
      const userData = await AsyncStorage.getItem("Usuario");
      if (userData) {
        const processado = JSON.parse(userData);
        setUser(processado);
        setFavoritos(processado.favoritos || []);
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }

  async function handleEditUser() {
    const FavoritosAtualizado = [...favoritos, filme];
    const AtualizadoUser = { ...user, favoritos: FavoritosAtualizado };

    try {
      const docRef = doc(db, "Clientes", user.id);
      await updateDoc(docRef, {
        nome: user.nome,
        email: user.email,
        favoritos: FavoritosAtualizado,
      });

      await AsyncStorage.setItem("Usuario", JSON.stringify(AtualizadoUser));
      setUser(AtualizadoUser);
      setFavoritos(FavoritosAtualizado);
      console.log("Favorito adicionado");
      
      // Mostrar a imagem e iniciar a animação
      setShowImage(true);
      startAnimation();
    } catch (error) {
      console.error("Erro ao atualizar os favoritos:", error);
    }
  }

  const startAnimation = () => {
    opacity.setValue(0);
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: true,
      }),
    ]).start(() => setShowImage(false)); // Ocultar a imagem após a animação
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{filme.Title}</Text>
      <Image style={styles.poster} source={{ uri: filme.Poster }} />
      <Text style={styles.plot}>{filme.Plot}</Text>
      <Text style={styles.title}>{user.nome}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEditUser}>
        <Text style={styles.buttonText}>Favoritar</Text>
      </TouchableOpacity>
      {showImage && (
        <Animated.Image
          style={[styles.blinkingImage, { opacity }]}
          source={require('../../assets/star-removebg-preview.png')}
        />
      )}
    </View>
  );
}


