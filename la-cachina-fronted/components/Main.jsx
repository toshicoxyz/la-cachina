import React,{ Component } from "react";
import {View,Text,StyleSheet} from "react-native";

class Main extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Menu</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        
    },
    texto: {
        color: "white",
    }
})

export default Main