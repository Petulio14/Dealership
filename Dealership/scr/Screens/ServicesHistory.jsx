import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
    <View>
      <Text>Historial de Servicio</Text>
      <View>
        <Text>Vehículo:</Text>
        <TextInput
          value={vehiculo}
          onChangeText={setVehiculo}
        />
        <Text>Fecha de ingreso:</Text>
        <TextInput
          value={date}
          onChangeText={setDate}
        />
        <Text>Tipo de servicio:</Text>
        <TextInput
          value={typeService}
          onChangeText={setTypeService}
        />
        <Button
          title="Agregar Registro"
          onPress={addReg}
        />
      </View>
      <View>
        {reg.map((registro, index) => (
          <Text key={index}>
            Vehículo: {registro.vehiculo}, Fecha: {registro.date}, Tipo de Servicio: {registro.typeService}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ServicesHistory;
