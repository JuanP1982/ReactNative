import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    containerInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    title: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 10,
      paddingHorizontal: 20,
    },
    userName: {
      fontSize: 25,
      color: '#fff',
      paddingHorizontal: 20,
    },
    logoutButton: {
      backgroundColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginRight: 20,
    },
    logoutButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    listaLateral: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    listaLateralItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: '#333',
      padding: 10,
      borderRadius: 5,
    },
    listaLateralPoster: {
      width: 160,
      height: 240,
      borderRadius: 5,
      marginRight: 10,
    },
    listaLateralTitle: {
      color: 'white',
      fontSize: 18,
      flex: 1,
    },
  });

export default styles