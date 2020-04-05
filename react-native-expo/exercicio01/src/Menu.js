import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import ParImpar from './componentes/ParImpar'
import Simples from './componentes/Simples'
import {Inverter, MegaSena} from './componentes/Mult'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'
import {TextoSincronizado} from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
      screen: Flex
    },
    ListaFlex:{
      screen: ListaFlex,
      navigationOptions: {title: 'Lista (Flex Box)'}
    },
    TextoSincronizado: {
      screen: () => <TextoSincronizado/>,
      navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo: {
      screen: () => <Avo nome='Roque' sobrenome='Almeida'/> 
    },
    Evento: {
      screen: Evento
    },
    ValidarProps: {
      screen: () => <ValidarProps label='testee ' ano={18}/>
    },
    Plataformas: {
      screen: () => <Plataformas />
    },
    Contador: {
      screen: () => <Contador numeroInicial = {7} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
         navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
      screen: () => <Inverter texto='Mother Russia'   />
    },
    ParImpar: {
      screen: () => <ParImpar numero={30} />,
      navigationOptions: {title: 'Par & Impar'} 
    },
    Simples: {
      screen: () =><Simples texto='Mother Russia'   />
    }
},  {drawerWidth: 150})