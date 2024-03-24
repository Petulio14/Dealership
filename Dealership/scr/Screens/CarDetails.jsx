import React from 'react'
import {  Text, View, Image } from 'react-native'


const CarDetails = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('./Images/Vehicle.png')} style ={{width: 320,height: 440,borderRadius: 18, resizeMode: 'center'}}/>
        
        <Text> Descripcion complenta </Text>
    </View>
  )
}

export default CarDetails
