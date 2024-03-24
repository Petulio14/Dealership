import React from 'react'
import {  Text, View, Image } from 'react-native'


const CarDetails = () => {

  return (
    <View>
        <Image source={require('./Images/logo-autostop.png')} style ={{width: 320,height: 440,borderRadius: 18, resizeMode: 'center'}}/>
        
        <Text> Descripcion complenta </Text>
    </View>
  )
}

export default CarDetails
