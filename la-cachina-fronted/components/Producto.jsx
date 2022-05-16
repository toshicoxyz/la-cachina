import React, { Component, useState } from "react";
import { View, Text, Image} from "react-native";
/* PRODUCT */
class Producto extends Component {
  render() {
    return (
      <View>
        <Text>Producto</Text>
        <Image
          style={{
            width: 120,
            height: 120,
            
          }}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        ></Image>
      </View>
    );
  }
}

export default Producto;
