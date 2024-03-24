import React from 'react'
import {  Text, View, Image } from 'react-native'


const Notification = () => {

  return (
    <View>
        <Image source={require('./Images/notificacion.png')} style ={{width: 320,height: 440,borderRadius: 18, resizeMode: 'center'}}/>
        
        <Text> Notificacion </Text>
    </View>
  )
}

export default Notification
