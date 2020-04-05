import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
    } from 'react-native'

    const styles = StyleSheet.create({
        button: {
            fontSize: 20,
            height: Dimensions.get('window').width/4,
            width: Dimensions.get('window').width/4,
            padding:20,
            backgroundColor: '#202020',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,.5)',
            borderRadius:3,
            color: '#fff',

        },
        operationButon: {
            color: '#202020',
            backgroundColor: '#fa8231', 
            padding: 15,
            fontSize: 25,   
        },

        buttonDouble: {
            width: (Dimensions.get('window').width/4)*2,

        },
        buttonTriple: {
            width: (Dimensions.get('window').width/4)*3,
            
        }
    })

    export default props =>{

        const stylesButton = [styles.button]
        if (props.double) stylesButton.push(styles.buttonDouble)
        if (props.triple) stylesButton.push(styles.buttonTriple)
        if (props.operation) stylesButton.push(styles.operationButon)
        
        

        return(
            <TouchableHighlight onPress={() =>props.onClick(props.label)}>
                <Text style={stylesButton}>{props.label}</Text>
            </TouchableHighlight>
        )
    }