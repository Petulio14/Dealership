import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '../../firebaseConfig';

const DetailsScreen = ({ route }) => {
  const { dataType } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const database = getDatabase(app);
    const dataRef = ref(database, dataType);

    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const dataArray = Object.values(snapshot.val());
        setData(dataArray);
      }
      setLoading(false);
    });

    return () => {
    };
  }, [dataType]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='red' />
      </SafeAreaView>
    );
  }

  const fieldMapping = {
    serviceRegistrations: [
      { originalField: 'date', displayLabel: 'Fecha' },
      { originalField: 'typeService', displayLabel: 'Tipo de servicio' },
      { originalField: 'vehicle', displayLabel: 'Placa de Vehículo' },
    ],
    technical_support: [
      { originalField: 'idNumber', displayLabel: 'Cédula' },
      { originalField: 'name', displayLabel: 'Nombre' },
    ],
    test_drives: [
      { originalField: 'idNumber', displayLabel: 'Cédula' },
      { originalField: 'name', displayLabel: 'Nombre' },
      { originalField: 'phoneNumber', displayLabel: 'Teléfono' },
    ],
    customer_support: [
      { originalField: 'idNumber', displayLabel: 'Cédula' },
      { originalField: 'name', displayLabel: 'Nombre' },
      { originalField: 'vehiclePlate', displayLabel: 'Placa de Vehículo' },
    ],
  };

  const getTitle = (dataType) => {
    switch (dataType) {
      case 'serviceRegistrations':
        return 'Historial de Servicios';
      case 'technical_support':
        return 'Servicios Mecánicos Agendados';
      case 'test_drives':
        return 'Pruebas de Manejo';
      case 'customer_support':
        return 'Soporte Técnico Usuario';
      default:
        return 'Detalles';
    }
  };

  const title = getTitle(dataType);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>{title}</Text>
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
          {fieldMapping[dataType].map((field, fieldIndex) => (
            <Text key={fieldIndex} style={styles.itemText}>
              <Text style={styles.fieldLabel}>{field.displayLabel}:</Text> {item[field.originalField]}
            </Text>
          ))}
        </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#ff0a0a',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  fieldLabel: {
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
