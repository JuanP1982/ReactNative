import { View, Text,Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProdutos } from '../../service/filmes'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebaseConnection';

export default function MoviePage({route}) {
  const navigation = useNavigation()
  const [filme,setFilme] = useState({})
  const {Title} = route.params
  const [user, setUser] = useState({})
  const [favoritos, setFavoritos] = useState([])
  
  useEffect(()=>{
    getProdutos(Title)
    .then((res)=>setFilme(res.data))
    .catch((err)=>console.log("Erro!", err))
    getUser();
  },[])

  useEffect(() => {
    if (user && user.favoritos) {
      setFavoritos(user.favoritos);
    }
  }, [user]);

  async function getUser() {
    const userData = await AsyncStorage.getItem('Usuario');
    if (userData) {
      const processado = JSON.parse(userData);
      setUser(processado);
      setFavoritos(processado.favoritos || []);
    }
  }

  async function handleEditUser() {
    const FavoritosAtualizado = [...favoritos, filme];
    const AtualizadoUser = { ...user, favoritos: FavoritosAtualizado };

    try {
      const docRef = doc(db, 'Clientes', user.id);
      await updateDoc(docRef, {
        nome: user.nome,
        email: user.email,
        favoritos: FavoritosAtualizado,
      });

      await AsyncStorage.setItem('Usuario', JSON.stringify(AtualizadoUser));
      setUser(AtualizadoUser);
      setFavoritos(FavoritosAtualizado);
      console.log('Favorito adicionado');
    } catch (error) {
      console.error('Erro ao atualizar os favoritos:', error);
    }
  }

  
  
    return (
    <View>
      <Text>{filme.Title}</Text>
      <Image style={{width:300,height:300}} source={{uri:filme.Poster}}></Image>
      <Text>{filme.Plot}</Text>
      <Text>{user.nome}</Text>
      <Button title='Voltar' onPress={()=>navigation.navigate('Home')}></Button>
      <Button title='Favoritar' onPress={handleEditUser}></Button>
    </View>
  )
}