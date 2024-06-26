import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'

export default function Input({placeholder,value, onChangeText}) {
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={onChangeText}
      />
  )
}