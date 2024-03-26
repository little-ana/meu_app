import React, { Component } from "react";
import {View, Text, Image} from "react-native";

// snack.expo.dev
class App extends Component() {
    render() {
        let curso = 'INFO';

        return (
            // view é uma tela ou fragmento de tela
            <View>
                <Text>Olá Mundo!</Text>
                <Text stryle={{color: 'blue', fontSize: 30, margin: 15}}>Olá Mundo!</Text>
                <Image source={{uri: 'url'}} style={{width: 300, height: 300,}} />
                <Text>{curso}</Text>
            </View>
        )
    }
}

export default App;