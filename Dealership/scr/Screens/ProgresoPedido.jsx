import React,{useContext, useEffect,useState} from 'react'
import { View, StyleSheet } from 'react-native'
import vehiclesContext from '../context/vehicles/pedidos/vehiclesContext'
import { Text } from 'react-native-paper'

const ProgresoPedido = () =>{
  const {} = useContext(vehiclesContext)
    return (
      <View>
        <Text> Progreso del pedido </Text>
      </View>
    )
}

export default ProgresoPedido