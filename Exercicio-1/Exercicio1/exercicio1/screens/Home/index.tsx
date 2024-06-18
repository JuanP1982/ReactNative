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
      <Text>Grupo 1</Text>
      <Card></Card>
      <Botao value={"Ir para Sobre"} onPress={()=>{navigate.jumpTo('Sobre')}}></Botao>
    </View>
  )
}
