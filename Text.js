import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";


class Ttext extends Component{

    // Definindo propriedade
    static propriedade = {
        limite: ''
    }

    // Definindo Estado
    state = {
        texto: ''
    }

    // Definindo função
    alteracao = (texto) => {

        if(texto.length <= 10) {
            this.setState({
                texto
            });
        }

        

    }

    render(){

        const {state, props} = this;

        return(
        <View>
              <TextInput multiline={true}  numberOfLines={3} onChangeText={this.alteracao} style={styles.input} value={state.texto}></TextInput>
              <Text style={styles.text}>Total: {state.texto.length}/{props.limite} </Text>
        </View>
        )  
    }
}


const styles = StyleSheet.create({
    text: {
        color: "black",
        textAlign: "center",
        fontSize: 40,
        marginTop: 10
      },
    input: {
        borderColor:'gray', 
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 50,
        paddingLeft: 10
    }, 
});

export default Ttext;