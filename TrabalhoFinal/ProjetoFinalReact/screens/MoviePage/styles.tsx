import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#FFFFFF",
  },
  poster: {
    width: 250,
    height: 400,
    resizeMode: "cover",
    marginBottom: 20,
  },
  plot: {
    textAlign: "justify",
    marginBottom: 20,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#3d3d3d",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#00FF00",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
