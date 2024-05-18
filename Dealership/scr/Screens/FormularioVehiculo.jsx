import React, { useContext, useState, useEffect } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import globalStyles from '../styles/global';
import { Button, Text, TextInput, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import vehiclesContext from '../context/vehicles/pedidos/vehiclesContext';

const FormularioVehiculo = () => {
  const [cantidad, guardarCantidad] = useState(1);
  const [total, guardarTotal] = useState(0);

  const { vehicle, guardarPedido } = useContext(vehiclesContext);
  const { price } = vehicle;

  const navigation = useNavigation();

  const calcularTotal = () => {
    const totalPagar = price * cantidad;
    guardarTotal(totalPagar);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      guardarCantidad(nuevaCantidad);
    }
  };

  const incrementar = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    guardarCantidad(nuevaCantidad);
  };

  const confirmarOrden = () => {
    Alert.alert(
      '¿Deseas confirmar el pedido?',
      'Un pedido confirmado, no se puede modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            const pedido = {
              ...vehicle,
              cantidad,
              total,
            };

            guardarPedido(pedido);
            navigation.navigate('ResumenPedido');
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  return (
    <View style={styles.container}>
      <Text style={globalStyles.titulos}>Cantidad</Text>
      <View style={styles.quantityContainer}>
        <Button
          mode="contained"
          onPress={() => decrementar()}
          style={styles.quantityButton}
        >
          -
        </Button>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={String(cantidad)}
          onChangeText={(cantidad) => guardarCantidad(Number(cantidad))}
        />
        <Button
          mode="contained"
          onPress={() => incrementar()}
          style={styles.quantityButton}
        >
          +
        </Button>
      </View>
      <Text style={globalStyles.titulos}>Total: $ {total}</Text>
      <Card>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => confirmarOrden()}
            style={globalStyles.button}
          >
            Ordenar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityButton: {
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor:'#BD6645'
  },
  quantityInput: {
    textAlign: 'center',
    fontSize: 20,
    width: 60,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default FormularioVehiculo;
