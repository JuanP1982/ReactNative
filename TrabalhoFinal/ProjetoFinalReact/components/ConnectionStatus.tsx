import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const ConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected === false) {
        alert("Sem conexão com a internet!")
      }else{
        console.log("Status da conexão: Conectado");
        
      }
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Sem conexão com a internet!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  messageContainer: {
    backgroundColor: "red",
    paddingVertical: 10,
    alignItems: "center",
  },
  messageText: {
    color: "white",
  },
});

export default ConnectionStatus;
