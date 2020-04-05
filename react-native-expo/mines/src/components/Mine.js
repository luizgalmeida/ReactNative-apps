import React from 'react'
import {View, StyleSheet} from 'react-native'

import params from '../Params'

export default props =>{
    return (
        <View style={StyleSheet.container}>
            <View style={styles.coreMine}></View>
            <View style={styles.line}></View>
            <View style={[styles.line,{transform: [{rotate: '45deg'}] }]}></View>
            <View style={[styles.line,{transform: [{rotate: '90deg'}] }]}></View>
            <View style={[styles.line,{transform: [{rotate: '135deg'}] }]}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
       justifyContent: 'center',

    },
    coreMine: {
        height: params.blockSize/2,
        width: params.blockSize/2,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 2,
        width: params.blockSize/1.5,
        borderRadius: 3,
        backgroundColor: '#000',
    },
})