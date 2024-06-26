import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import styles from './styles';


const Profile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const opacidade = useRef(new Animated.Value(1)).current;
  const [user, setUser] = useState({})
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (isFocused) {
      loadUserName();
    }
  }, [isFocused]);


  const loadUserName = async () => {
    try {
      const userData = await AsyncStorage.getItem('Usuario');
      if (userData) {
        const processado = JSON.parse(userData);
        setUser(processado);
        setFavoritos(processado.favoritos || []);
        console.log(user);
        
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('Usuario');
      
      
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const renderListaLateralItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('MoviePage', { Title: item.Title })}
    style={styles.listaLateralItem  }
    >
      <Text style={styles.listaLateralTitle}>{item.Title}</Text>
      <Image
        resizeMode="stretch"
        style={styles.listaLateralPoster}
        source={{ uri: item.Poster }}
        />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
      <Text style={styles.userName }>Bem vindo, {user.nome}</Text>
      <TouchableOpacity style={styles.logoutButton } onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      </View> 

      <View style={styles.listaLateral}>
        <Text style={styles.title}>Favoritos:</Text>
          <FlatList
            data={favoritos}
            renderItem={renderListaLateralItem}
            keyExtractor={(item) => item.imdbID}
          />
        </View>
        </View>
  );
};




export default Profile;









    