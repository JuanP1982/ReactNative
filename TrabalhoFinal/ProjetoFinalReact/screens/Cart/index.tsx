import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:24,
        color:"#000000"
    }
  });