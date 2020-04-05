import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ParImpar from './componentes/ParImpar'
import Simples from './componentes/Simples'
import {Inverter, MegaSena} from './componentes/Mult'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Simples texto='React'/>
        <ParImpar numero='1'/>
        <Inverter texto='React Nativo!' />
        <MegaSena numeros={9} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  
})
