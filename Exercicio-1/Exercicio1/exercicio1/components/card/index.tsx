import { View, Text,Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style'
import React from 'react'

export default function Card({Nome,Foto}) {
  const navigate = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{navigate.jumpTo('Contato')}} style={styles.container}>
        <Text  style={styles.txt}>{Nome}</Text>
        <Image style={styles.img} source={Foto}/>
    </TouchableOpacity>
  )
}