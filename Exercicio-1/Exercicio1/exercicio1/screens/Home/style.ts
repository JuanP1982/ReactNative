import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor:"black",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    containerFoto:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom:100
    },
    txt:{
        color:"white",
        fontSize:50,
    }
})

export default styles