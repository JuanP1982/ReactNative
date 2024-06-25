import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.poster} source={item.Poster} />
      <Text style={styles.title}>{item.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
});

export default Card;
