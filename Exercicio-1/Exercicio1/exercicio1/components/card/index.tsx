import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View>
        <Text>Juan Pedro</Text>
        <Image source={require("../../assets/Alternador.png")}/>
    </View>
  )
}