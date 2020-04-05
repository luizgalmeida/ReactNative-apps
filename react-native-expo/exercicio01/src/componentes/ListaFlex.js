import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos= [
    {id: 1, nome: 'João', nota: 7.9 },
    {id: 2, nome: 'Luizinho', nota: 5.4},
    {id: 3, nome: 'Zabela', nota: 10.0},
    {id: 4, nome: 'Finn', nota: 5.2},
    {id: 5, nome: 'Jake', nota: 4.4},
    {id: 6, nome: 'Bmo', nota: 3.9},
    {id: 7, nome: 'Simon Petrikov', nota: 9.9},
    {id: 8, nome: 'Ronaldinho', nota: 6.4},
    {id: 9, nome: 'Litch', nota: 7.7},
    {id: 10, nome: 'João', nota: 6.9 },
    {id: 11, nome: 'João22', nota: 7.0 },
    {id: 12, nome: 'João21', nota: 7.1 },
    {id: 13, nome: 'João23', nota: 7.2 },
    {id: 14, nome: 'Luizinho', nota: 5.4},
    {id: 15, nome: 'Jake', nota: 4.4},
    {id: 16, nome: 'Bmo', nota: 3.9},
    {id: 17, nome: 'Simon Petrikov', nota: 9.9},
    {id: 18, nome: 'Ronaldinho', nota: 6.4},
    {id: 19, nome: 'Litch', nota: 7.7}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#ddd',
    borderWidth: 0.5,
    borderColor: '#222',
    //flex
    alignItems: 'center',
   // justifyContent: 'flex-start',
   flexDirection: 'row',
   justifyContent: 'space-between',

}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>
    

export default props =>{
    const renderItem = ({ item }) =>{
        return <Aluno {...item}/>
        }
    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index)=> index.toString()}></FlatList>
        </ScrollView>
        )
    }
