import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import styles from './style'
import Botao from '../../components/button';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.txt}>
        Este é o nosso primeiro trabalho em React Native e estamos muito
        animados com as possibilidades que essa tecnologia oferece. No Grupo 1,
        estamos nos dedicando a aprender e aplicar os conceitos de forma
        prática, desenvolvendo um projeto que nos permita explorar as
        funcionalidades e potencialidades do React Native.
        </Text>
        
        <Text/>
       
        <Text style={styles.txt}>
        Estamos entusiasmados com o aprendizado e com a oportunidade de
        trabalhar em equipe, e esperamos que este seja o primeiro de muitos
        projetos de sucesso em nossa trajetória profissional.
        </Text>
        </View>
        
      <Botao
        value={"Ir para Home"}
        onPress={() => navigate.jumpTo("Home")}
      ></Botao>
    </View>
  );
}

