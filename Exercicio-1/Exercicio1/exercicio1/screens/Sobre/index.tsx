import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Botao from '../../components/button';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
  const navigate = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>



      <Botao value={"Ir para Home"} onPress={()=>navigate.jumpTo('Home')}></Botao>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});