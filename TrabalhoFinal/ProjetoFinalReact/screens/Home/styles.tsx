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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    color: "#fff",
    marginRight: 10,
  },
  encarte: {
    marginBottom: 20,
  },
  banner: {
    width: 330,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
  listaLateral: {
    marginBottom: 20,
    height: "90%",
    width: "100%",
  },
  listaLateralItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listaLateralPoster: {
    width: "100%",
    height: 230,
    borderRadius: 5,
  },
});
export default styles;
