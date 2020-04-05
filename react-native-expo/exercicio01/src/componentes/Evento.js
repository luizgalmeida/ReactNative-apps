import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

import Padrao from '../estilo/Padrao'

export default class Evento extends Component{
    state ={
        text: ''
    }
    /*state ={
        text: null
    }
    */

    alterarTexto = text => {
        this.setState({text})
    }
    render(){
        return (
          <View>
              <Text style = {Padrao.fonte40}>{this.state.text}</Text>
              <TextInput value={this.state.texto}
                style={Padrao.input}
                onChangeText = {this.alterarTexto}
              />
          </View>  
        )
    }
}