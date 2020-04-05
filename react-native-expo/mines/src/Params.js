import React from 'react'
import {Dimensions} from 'react-native'

const params ={
    blockSize: Dimensions.get('window').width / 8,
    borderSize: 5,
    fontSize: 15,
    headerRatio: .15, //proporção do painel superior da tela
    difficultLevel: 0.1,
    getColumnAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){
        const totalHeigth = Dimensions.get('window').height
        const boardHeigth = totalHeigth * (1 - this.headerRatio)
        return Math.floor(boardHeigth / this.blockSize)
    },

}

export default params