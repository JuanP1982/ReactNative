import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { getProdutos} from '../../service/filmes';


export default function Home() {
  const [filme, setFilme] = useState([])
  const [busca, setBusca] = useState("")

   function obterFilme(){
    getProdutos(busca).then((res)=>{setFilme(res.data)}).catch(()=>console.log("erro")
    )
    console.log(filme);
    
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.title}>{filme.Title}</Text>
      <Text style={styles.title}>{filme.Plot}</Text>
      <Text style={styles.title}>{filme.Title}</Text>
      <TextInput style={styles.input}  onChangeText={(text)=>setBusca(text)}></TextInput>
      <Image style={{width: '100%', height: '50%'}} source={{uri:filme.Poster}}/>
      <Button title='testando' onPress={obterFilme}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '##21212',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:24,
        color:"#fffff"
    },
    input:{
      borderColor:"#ffff",
      borderWidth:2,
      width:"90%"
    }
  });