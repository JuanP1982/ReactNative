import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import styles from './style'
import React from 'react'


export default function Contato() {
  return (
    <ScrollView style={styles.barra}>
    <View style={styles.container}>
      <Text style={styles.txt}>Contatos</Text>
      <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/brunatavares22")} style={styles.containerFoto}>
        <Image style={styles.img} source={require("../../assets/Bruna.jpeg")}/>
        <Image source={require("../../assets/Git.png")}></Image>
        <Text style={styles.txt}>Github</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/brunocariello")} style={styles.containerFoto}>
        <Image style={styles.img} source={require("../../assets/Bruno.jpeg")}/>
        <Image source={require("../../assets/Git.png")}></Image>
        <Text style={styles.txt}>Github</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/GeisilaCosta")} style={styles.containerFoto}>
        <Image style={styles.img} source={require("../../assets/Geisila.jpeg")}/>
        <Image source={require("../../assets/Git.png")}></Image>
        <Text style={styles.txt}>Github</Text>
      </TouchableOpacity>
      
      
      
      <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/FelipeMauriz")} style={styles.containerFoto}>
        <Image style={styles.img} source={require("../../assets/Felipe.jpeg")}/>
        <Image source={require("../../assets/Git.png")}></Image>
        <Text style={styles.txt}>Github</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/MAndriolo")} style={styles.containerFoto}>
        <Image style={styles.img} source={require("../../assets/Marcela.jpeg")}/>
        <Image source={require("../../assets/Git.png")}></Image>
        <Text style={styles.txt}>Github</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/JuanP1982")} style={styles.containerFoto}>
        <Image style={styles.img} source={require("../../assets/Juan.jpeg")}/>
        <Image source={require("../../assets/Git.png")}></Image>
        <Text style={styles.txt}>Github</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

