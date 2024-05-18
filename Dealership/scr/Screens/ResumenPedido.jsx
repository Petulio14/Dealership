import React, { useContext, useEffect } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native'; // Importa ScrollView
import { Text, Card, Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase';
import vehiclesContext from '../context/vehicles/pedidos/vehiclesContext';
import globalStyles from '../styles/global';

const ResumenPedido = () => {
  const { pedido, total, mostrarResumen, eliminarProducto } = useContext(vehiclesContext);
  const navigation = useNavigation();

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0);
    mostrarResumen(nuevoTotal);
  };

  const progresoPedido = () => {
    Alert.alert(
      'Desea confirmar el pedido',
      'Una vez confirmado no se puede cambiar',
      [
        {
          text: 'Confirmar',
          onPress: async () => {
            const pedidoObj = {
              tiempoEntrega: 0,
              completado: false,
              total: Number(total),
              orden: pedido,
              creado: Date.now()
            };

            try {
              await firebase.db.collection('Ordenes').add(pedidoObj);
              // Muestra una alerta de éxito
              Alert.alert('Pedido realizado', 'Tu pedido se ha realizado con éxito');
            } catch (error) {
              console.log(error);
              Alert.alert('Error', 'Hubo un error al procesar tu pedido');
            }
          }
        },
        {
          text: 'Cancelar', style: 'cancel'
        }
      ]
    );
  };

  const confirmarEliminar = (id) => {
    Alert.alert(
      '¿Desea eliminar el artículo?',
      'Una vez eliminado no se puede cambiar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            eliminarProducto(id);
          }
        },
        {
          text: 'Cancelar', style: 'cancel'
        }
      ]
    );
  };

  return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <View style={globalStyles.contenido}>
          <Text style={globalStyles.titulos}>Resumen del pedido</Text>
          {pedido.map((vehicle, i) => {
            const { cantidad, description, imageUrl, id, price } = vehicle;
            return (
              <View key={id + i} style={styles.platilloContainer}>
                <Avatar.Image size={70} source={{ uri: imageUrl }} />
                <Card>
                  <Card.Content>
                    <Text>{description}</Text>
                    <Text>Cantidad: {cantidad}</Text>
                    <Text>Precio: $ {price}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      style={styles.eliminarButton}
                      onPress={() => confirmarEliminar(id)}
                      mode="contained"
                      color="#EE1616"
                    >
                      Eliminar
                    </Button>
                  </Card.Actions>
                </Card>
              </View>
            );
          })}
          <Text style={globalStyles.cantidad}>Total a pagar: $ {total}</Text>
          <Button
            onPress={() => navigation.navigate('CATALOGO')}
            style={[globalStyles.button, { marginTop: 30 }]}
            mode="contained"
            dark
          >
            Volver al catálogo
          </Button>
          <Button
            onPress={progresoPedido}
            style={[globalStyles.button, { marginTop: 30 }]}
            mode="contained"
            dark
          >
            Ordenar pedido
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  platilloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eliminarButton: {
    marginLeft: 'auto',
    backgroundColor: '#EE1616',
  },
});

export default ResumenPedido;
