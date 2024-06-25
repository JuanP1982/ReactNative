import { View, Text, StyleSheet, Image, Touchable ,ScrollView, TouchableOpacity,Linking} from "react-native";
import React from "react";



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
          source={require("../../assets/Bruna.jpeg")}/>
    
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
          source={require("../../assets/Bruno.jpeg")}
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
          source={require("../../assets/Felipe.jpeg")}
        />
          <View style={styles.containerText}>
        <Text style={styles.texto}>
          Meu nome é Felipe Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          
        </Text>
        <View style={styles.icones}>
        <TouchableOpacity onPress={()=>Linking.openURL("https://youtu.be/HTLPULt0eJ4?si=GbyXtD8KKn5bgTUV")} >
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
          source={require("../../assets/Geisila.jpeg")}
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
          source={require("../../assets/Juan.jpeg")}
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
          source={require("../../assets/Marcela.jpeg")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  foto: {
    width: 130,
    height: 140,
    marginLeft: 10,
    flexDirection: "row",
  },
  containerFoto: {
    flexDirection: "row",
    marginTop:20,
    backgroundColor:"#1C1C1C",
    
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    marginRight:140,
  },

  icon:{
   width:30,
   height:30,
   marginTop:2,
   flexDirection:"row",
   marginRight:50,
  },

  containerText:{
    marginLeft:12,
  },
  icones:{
    flexDirection:"row",
    marginTop:30,  
  },
  film:{
    width:140,
    height:150
  }

});
