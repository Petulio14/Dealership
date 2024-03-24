import React from 'react'
import {  Text, View, Image } from 'react-native'


const Notification = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('./Images/notification.png')} style ={{width: 320,height: 440,borderRadius: 18, resizeMode: 'center'}}/>
        
        <Text> Notificacion </Text>
    </View>
  )
}

export default Notification
