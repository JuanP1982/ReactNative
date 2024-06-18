import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Ajuda() {
  return (
    <View style={styles.container}>
      <Text>Ajuda</Text>
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