import { View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'

export default function Apoie() {
  return (
    <View style={styles.container}>
      <ImageBackground  resizeMode='stretch' style={styles.img} source={require("../../assets/pix1.jpeg")}>
        </ImageBackground>
    </View>
  )
}

