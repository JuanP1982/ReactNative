import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Botao({onPress, value}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}><Text style={{color:'white'}}>{value}</Text></TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#7f2a82",
        color:"#fff",
        borderRadius:10,
        marginTop:10,
        padding:13
    }
})