import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Botao from '../../components/button';
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/card';

export default function Home() {
  const navigate = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Grupo 1</Text>
      <View style={styles.containerFoto}>
      <Card Nome={"Juan Pedro"}  Foto={require("../../assets/Juan.jpeg")}></Card>
      <Card Nome={"Bruna"}  Foto={require("../../assets/Bruna.jpeg")}></Card>
      <Card Nome={"Felipe"}  Foto={require("../../assets/Felipe.jpeg")}></Card>
      <Card Nome={"Geisila"}  Foto={require("../../assets/Geisila.jpeg")}></Card>
      <Card Nome={"Marcela"}  Foto={require("../../assets/Marcela.jpeg")}></Card>
      <Card Nome={"Bruno"}  Foto={require("../../assets/Bruno.jpeg")}></Card>
      </View>
      <Botao value={"Ir para Sobre"} onPress={()=>{navigate.jumpTo('Sobre')}}></Botao>
    </View>
  )
}
