import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '../../firebaseConfig';

const ReportScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [customerSupportCount, setCustomerSupportCount] = useState(0);
  const [serviceRegistrationsCount, setServiceRegistrationsCount] = useState(0);
  const [technicalSupportCount, setTechnicalSupportCount] = useState(0);
  const [testDrivesCount, setTestDrivesCount] = useState(0);

  useEffect(() => {
    const database = getDatabase(app);

    const serviceRegistrationsRef = ref(database, 'serviceRegistrations');
    onValue(serviceRegistrationsRef, (snapshot) => {
      if (snapshot.exists()) {
        const count = Object.keys(snapshot.val()).length;
        setServiceRegistrationsCount(count);
      }
    });

    const technicalSupportRef = ref(database, 'technical_support');
    onValue(technicalSupportRef, (snapshot) => {
      if (snapshot.exists()) {
        const count = Object.keys(snapshot.val()).length;
        setTechnicalSupportCount(count);
      }
    });

    const testDrivesRef = ref(database, 'test_drives');
    onValue(testDrivesRef, (snapshot) => {
      if (snapshot.exists()) {
        const count = Object.keys(snapshot.val()).length;
        setTestDrivesCount(count);
      }
    });

    const customerSuppRef = ref(database, 'customer_support');
    onValue(customerSuppRef, (snapshot) => {
      if (snapshot.exists()) {
        const count = Object.keys(snapshot.val()).length;
        setCustomerSupportCount(count);
      }
    });
    setLoading(false);
    return () => {
    };
  }, []);

  const renderButton = (title, count, dataType) => {
    return (
      <View style={styles.buttonContainer}>
        <Button
          icon='archive'
          mode='contained'
          onPress={() => navigation.navigate('LIST', { dataType: dataType })}
          contentStyle={styles.buttonContent}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{title} ({count})</Text>
        </Button>
      </View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='red' />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Reportes</Text>

        {renderButton('Historial de Servicios', serviceRegistrationsCount, 'serviceRegistrations')}
        {renderButton('Servicios Mecánicos Agendados', technicalSupportCount, 'technical_support')}
        {renderButton('Pruebas de Manejo', testDrivesCount, 'test_drives')}
        {renderButton('Soporte Técnico Usuario', customerSupportCount, 'customer_support')}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    paddingVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 16, 
  },
  button: {
    backgroundColor: 'red', 
  },
  buttonContent: {
    height: 48, 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ReportScreen;
