import { View, Text, StyleSheet, Image, Touchable ,ScrollView, TouchableOpacity,Linking} from "react-native";
import React from "react";

import styles from "./styles";

export default function About() {
  return (
       
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/favicon.png")}
        />
      </View>


      <ScrollView>
        <TouchableOpacity>
      <View style={styles.containerFoto}>
     
        <Image
          style={styles.foto}
          source={require("../../assets/Bruna.png")}/>
    
          <View style={styles.containerText}>
        <Text style={styles.texto}>
        Sou Bruna Tavares Lima, tenho 20 anos e estudo programação com o objetivo de
        me tornar uma desenvolvedora FullStack. Atualmente sou residente em de TIC/Software do Serratec
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/HTLPULt0eJ4?si=GbyXtD8KKn5bgTUV")} >
              <Image
          style={styles.icon}
          source={require("../../assets/movie.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/itsbrunatavares_/")} >
              <Image
          style={styles.icon}
          source={require("../../assets/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/brunatavares22")} >
              <Image
          style={styles.icon}
          source={require("../../assets/github.png")}/>
          </TouchableOpacity>
          </View>
         </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.containerFoto}>
        <Image
          style={styles.foto}
          source={require("../../assets/Bruno.png")}
        />
          <View style={styles.containerText}>
        <Text style={styles.texto}>
        Meu nome é Bruno Queiroz Cariello, tenho 32 anos e estou imerso no estudo da 
        programação com o objetivo de me especializar como desenvolvedor FullStack.
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=8sB1HTghkg4&t=1s")} >
              <Image
          style={styles.icon}
          source={require("../../assets/movie.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/brunocariello")} >
              <Image
          style={styles.icon}
          source={require("../../assets/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/brunocariello")} >
              <Image
          style={styles.icon}
          source={require("../../assets/github.png")}/>
          </TouchableOpacity>
          </View>
         </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.containerFoto}>
        <Image
          style={styles.foto}
          source={require("../../assets/Felipe.png")}
        />
          <View style={styles.containerText}>
        <Text style={styles.texto}>
        Meu nome é Felipe Amorim,
          tenho 31 anos e sou 
          Pai de 2 Meninos.
          Sou feliz,esforçado e dedicado com meus estudos.
          E um dia muitos saberão quem sou eu.
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=yHgiEADa5M8")} >
              <Image
          style={styles.icon}
          source={require("../../assets/movie.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/felipe.mauriz")} >
              <Image
          style={styles.icon}
          source={require("../../assets/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/FelipeMauriz")} >
              <Image
          style={styles.icon}
          source={require("../../assets/github.png")}/>
          </TouchableOpacity>
          </View>
         </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.containerFoto}>
        <Image
          style={styles.foto}
          source={require("../../assets/Geisila.png")}
        />
       

          <View style={styles.containerText}>
        <Text style={styles.texto}>
        Sou Geisila Silva estudante de análise e desenvolvimento de sistemas,  atualmente 
        fazendo a residência tic software do Serratec, em busca da primeira oportunidade na área.
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/iWEQNRo-c34?si=rJysu1joTgi_31O_")} >
              <Image
          style={styles.icon}
          source={require("../../assets/movie.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/geisilasilvadacosta")} >
              <Image
          style={styles.icon}
          source={require("../../assets/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/GeisilaCosta")} >
              <Image
          style={styles.icon}
          source={require("../../assets/github.png")}/>
          </TouchableOpacity>
          </View>
         </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.containerFoto}>
        <Image
          style={styles.foto}
          source={require("../../assets/Juan.png")}
        />
       

          <View style={styles.containerText}>
        <Text style={styles.texto}>
        Meu nome é Juan Pedro, tenho 20 anos e estou entusiasmado e dedicado ao estudo
         da programação.
        Tenho me aprofundado cada vez mais em diversas linguagens e tecnologias.
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/IrBKwzL3K7s?si=Gj4BH3OHs_vL29uH")} >
              <Image
          style={styles.icon}
          source={require("../../assets/movie.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/juanp20_04")} >
              <Image
          style={styles.icon}
          source={require("../../assets/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/JuanP1982")} >
              <Image
          style={styles.icon}
          source={require("../../assets/github.png")}/>
          </TouchableOpacity>
          </View>
         </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.containerFoto}>
        <Image
          style={styles.foto}
          source={require("../../assets/Marcela.png")}
        />
       

          <View style={styles.containerText}>
        <Text style={styles.texto}>
        Sou a Marcela,uma profissional com mais de 15 anos na área 
          em constante aprendizado e disposta a novos desafios.
          Com histórico em liderança de projetos e equipes.
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/W4T9rZq7bf8?si=7qGzbxHOB0FLypnQ")} >
              <Image
          style={styles.icon}
          source={require("../../assets/movie.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/marcelaandriolo__")} >
              <Image
          style={styles.icon}
          source={require("../../assets/instagram.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/MAndriolo")} >
              <Image
          style={styles.icon}
          source={require("../../assets/github.png")}/>
          </TouchableOpacity>
          </View>
         </View>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
      
  );
}

