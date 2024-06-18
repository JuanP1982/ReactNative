import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
container: {
    width: '100%',
    backgroundColor:"black",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color:"black"
  },
  containerFoto:{
    flexWrap:"wrap",
    flexDirection:"row",
    backgroundColor:"#60d4ea",
    height:150,
    width:300,
    alignItems: 'center',
    marginBottom:20
  },
    img: {
    height:150,
    width:150
  },
  barra:{
    overflow:"scroll",
    direction:"ltr"
  }
})

export default styles