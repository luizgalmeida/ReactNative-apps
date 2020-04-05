import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

import Padrao from '../estilo/Padrao'

export const Entrada = props =>
    <View>
        <TextInput value={props.text}
            style={Padrao.input}
            onChangeText={props.chamarQuandoMudar} 
            ></TextInput>
    </View>
export class TextoSincronizado extends Component{

    state = {
        text: ''
    }
    alterarTexto = text =>{
       this.setState({ text }) 
    }

    render(){
        return(
            <View>
                <Text style={Padrao.fonte40}>
                    {this.state.text}
                </Text>
                <Entrada text={this.state.text} chamarQuandoMudar={this.alterarTexto}>
                </Entrada>
            </View>
        )

    }

}