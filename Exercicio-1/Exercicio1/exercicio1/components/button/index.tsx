import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'

export default function Botao({onPress, value}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}><Text style={{color:'white', fontSize:20}}>{value}</Text></TouchableOpacity>
  )
}

