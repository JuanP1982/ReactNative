import { View, Text,Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProdutos } from '../../service/filmes'
import { useNavigation } from '@react-navigation/native'

export default function MoviePage({route}) {
  const navigation = useNavigation()
  const [filme,setFilme] = useState({})
  const {Title} = route.params
  
  useEffect(()=>{
    getProdutos(Title)
    .then((res)=>setFilme(res.data))
    .catch((err)=>console.log("Erro!", err))
  },[])
    return (
    <View>
      <Text>{filme.Title}</Text>
      <Image style={{width:300,height:300}} source={{uri:filme.Poster}}></Image>
      <Text>{filme.Plot}</Text>
      <Button title='Voltar' onPress={()=>navigation.navigate('Home')}></Button>
    </View>
  )
}