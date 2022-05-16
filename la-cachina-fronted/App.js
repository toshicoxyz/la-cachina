import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Main from "./components/Main";
import Producto from "./components/Producto";

export default function App() {
  /* Catalogue */
  return (
    <View style={styles.container}>
      <Main />
      <SafeAreaView style={styles.sure}>
        <ScrollView style={styles.scroll}>
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />

          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />

        </ScrollView>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 206, 43, 0.65)",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 5,
  },
  sure: {
    height: "100%",
    width: "100%",
    borderColor: "black",
    borderWidth: 5,
  },
  scroll: {
    display: "flex",
    flexDirection: "column",
    
    height: "100%",
    width: "100%",
   
    borderColor: "red",
    borderWidth: 5,
    padding: 5,
  },
  item: {
    flexGrow: 4,
  },
});
