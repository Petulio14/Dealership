import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Vehicle from './Vehicle'

const VehicleList = ({ vehicles }) => {
  return (
    <SafeAreaView>
    <ScrollView>
        {vehicles.map((vehicle) =>(
            <Vehicle
            key={vehicle.id}
            imageUrl = {vehicle.imageUrl}
            description={vehicle.description}
            price={vehicle.price}
            />
        ))}
      
    </ScrollView>
    </SafeAreaView>
  )
}

export default VehicleList