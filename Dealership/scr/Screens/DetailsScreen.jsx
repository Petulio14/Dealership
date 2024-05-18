import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import vehiclesContext from '../context/vehicles/pedidos/vehiclesContext';
import globalStyles from '../styles/global';

const DetailsScreen = () => {
  const { vehicle } = useContext(vehiclesContext);
  const { description, price, imageUrl } = vehicle;
  const navigation = useNavigation();

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titulos}>{description}</Text>
      <Card style={styles.card}>
        <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
        <Card.Content>
          <Text style={styles.price}>Precio: ${price}</Text>
          <Text>{description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('FormularioVehiculo')}
          >
            Ordenar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  image: {
    height: 300,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#EE1616',
  },
});

export default DetailsScreen;
