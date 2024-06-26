import { StyleSheet } from "react-native";

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
      marginTop:10,  
    },
    film:{
      width:140,
      height:150
    }
  
  });
  export default styles;  