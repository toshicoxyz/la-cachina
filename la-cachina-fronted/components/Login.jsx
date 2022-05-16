import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import logo from "./assets/Logo.png";

export default function Login() {
  /* LOGIN */
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.login_text}> Usuario / Correo </Text>
      <TextInput style={styles.login_input} placeholder="Usuario" />
      <Text style={styles.login_text}>Password</Text>
      <TextInput
        style={styles.login_input}
        placeholder="Contraseña"
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.login_to_forget}
        onPress={() => Alert.alert("Olvidastes tu contraseña")}
      >
        <Text>Olvidaste tu Contraseña</Text>
      </TouchableOpacity>
      <View style={styles.container_button}>
        <Button
          onPress={() => Alert.alert("Hola")}
          title="Login"
          color="#841584"
          accessibilityLabel="Aprende mas del boton purpura"
        />
        <Button
          onPress={() => Alert.alert("Hola")}
          title="Register"
          color="#841584"
          accessibilityLabel="Aprende mas del boton purpura"
        />
      </View>
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
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  login_text: {
    marginTop: 20,
  },
  login_input: {
    height: 40,
    width: 250,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  login_to_forget: {
    padding: 10,
  },
  container_button: {
    borderColor: "black",
    borderWidth: 20,
    padding: 20,
  },
});
