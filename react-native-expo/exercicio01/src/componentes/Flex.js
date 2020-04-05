import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'

const styles = StyleSheet.create({
    
    container:{
        height: '100%',
    },
    
    norte:{
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center',

    },
    centro:{
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#7D67AF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,  
    },
    sul:{
        flex: 1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        
    },

    circulo: {
        width: 50,
        height: 50,
        backgroundColor: '#f47f61',
        borderRadius: 50,
        margin: 10,
    },
})

const Circulo = props =>{
    return(
        <View style={styles.circulo}></View>
    )
}

export default props =>{
    return (
       <View style={styles.container}>

        <View style={styles.norte}>
            <Circulo></Circulo>
        </View>
     
        <View style={styles.centro}>
            <Circulo></Circulo>
            <Circulo></Circulo>
            <Circulo></Circulo>
        </View>

        <View style={styles.sul}>
            <Circulo></Circulo>
            <Circulo></Circulo>
        </View>

       </View> 
    )
}