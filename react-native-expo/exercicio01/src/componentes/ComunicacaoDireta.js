import React from 'react'
import {View, Text} from 'react-native'

const fonte = { 
    style: {
        fontSize: 30
        }
    }
function filhosComProps(props){
    React.Children.map(props.children,
    c => React.cloneElement(c, {...props, ...c.props}))
}
export const Filho = props => 
    <View>
        <Text {...fonte} >Filho: {props.nome} {props.sobrenome}</Text>
    </View>
    

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/*props.children*/}
        {/*React.cloneElement(props.children, {...props, ...props.children.props})*/}
        {filhosComProps(props)}
    </View>

export const Avo = props => 
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Luis Carlinhos' sobrenome={props.sobrenome}>
            <Filho nome='Gabrielzinho'></Filho>
            <Filho nome='Roquinho'></Filho>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Cassio'></Filho>
            <Filho nome='Larapio'></Filho>
        </Pai>
    </View>

