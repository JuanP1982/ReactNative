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
          Meu nome é Bruna Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
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
          Meu nome é Bruno Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/HTLPULt0eJ4?si=GbyXtD8KKn5bgTUV")} >
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
          Meu nome é Felipe Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/yHgiEADa5M8?si=YCezwkTwnj1Qt7JS")} >
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
          Meu nome é Geisila Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
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
          Meu nome é Juan Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/HTLPULt0eJ4?si=GbyXtD8KKn5bgTUV")} >
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
          Meu nome é Marcela Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/HTLPULt0eJ4?si=GbyXtD8KKn5bgTUV")} >
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

