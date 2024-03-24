import React, { useState } from 'react';
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView,Button } from "react-native";


const ServicesHistory = () => {
  const [reg, setReg] = useState([]);
  const [vehiculo, setVehiculo] = useState('');
  const [date, setDate] = useState('');
  const [typeService, setTypeService] = useState('');

  const addReg = () => {
    const newReg = {
      vehiculo: vehiculo,
      date: date,
      typeService: typeService,
    };
    setReg((prevReg) => [...prevReg, newReg]);
    
    setVehiculo('');
    setDate('');
    setTypeService('');
  };

  return (
    <SafeAreaView>  
      <ScrollView>

        <View style={{ flex: 1, justifyContent: 'flex-star' }}>
          <Text style={styles.subHeader}>CONCESIONARIO SW 5</Text>
        </View>

        <View style={{justifyContent:'center'}}>
          <Image source={require('./Images/mechanic.png')} style ={{resizeMode:'center', width: 400, height: 200}}></Image>
        </View>

        <View>
          <Text>Vehículo:</Text>
          <TextInput
            value={vehiculo}
            onChangeText={text =>  setVehiculo(text)}
            placeholder="Vehiculo"
          />
          <Text>Fecha de ingreso:</Text>
          <TextInput
            value={date}
            onChangeText={text => setDate(text)}
            placeholder="Ingrese la fecha"
          />
          <Text>Tipo de servicio:</Text>
          <TextInput
            value={typeService}
            onChangeText={text => setTypeService(text)}
            placeholder="Tipo de servicio"
          />
          <Button
            title="Agregar Registro"
            onPress={addReg} color= "red"/>
          
          
          
        </View>
        <View>
          {reg.map((registro, index) => (
            <Text key={index}>
              Vehículo: {registro.vehiculo}{"\n"}
              Fecha: {registro.date}{"\n"}
              Tipo de Servicio: {registro.typeService}{"\n"}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  subHeader: {
    fontSize: 23,
    backgroundColor : "#ff0a0a",
    color : "white",
    textAlign : "center",
    paddingVertical : 10,
    marginBottom : 10,
    paddingHorizontal: 106,
    
  },
  hole: {
      paddingVertical: 13

  },
  
});
export default ServicesHistory;
