import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import vehiclesContext from '../context/vehicles/pedidos/vehiclesContext';
import { useNavigation } from '@react-navigation/native';
import { Text, Avatar } from 'react-native-paper';
import globalStyles from '../styles/global';

const VehicleList = () => {
  const { menu, obtenerProductos } = useContext(FirebaseContext);
  const { selecionarVehicle } = useContext(vehiclesContext);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <SafeAreaView style={globalStyles.contenedor}>
      <ScrollView style={styles.scrollView}>
        <View>
          {menu && menu.length > 0 ? (
            menu.map((vehiculo) => (
              <TouchableOpacity
                key={vehiculo.id}
                style={styles.vehicleContainer}
                onPress={() => {
                  selecionarVehicle(vehiculo);
                  navigation.navigate('DetailsScreen');
                }}
              >
                <Avatar.Image size={120} source={{ uri: vehiculo.imageUrl }} style={styles.avatar} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{vehiculo.description}</Text>
                  <Text style={styles.price} numberOfLines={2}>
                    {`$ ${vehiculo.price}`}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noDataText}>No hay vehículos disponibles</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
  },
  vehicleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#f9f9f9', // Optional for better visual separation
    borderRadius: 10, // Optional for rounded corners
    elevation: 3, // Optional for shadow
  },
  avatar: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    color: '#666',
    fontSize: 16,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default VehicleList;
