import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import {storage } from "../../firebaseConfig"; 
import { ref, getDownloadURL } from "firebase/storage"; 


const HomeScreen = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImageFromFirebase = async () => {
      try {
        const pathReference = ref(storage, 'imagenes/Logo.png'); 
        const url = await getDownloadURL(pathReference); 
        setImageUrl(url); 
      } catch (error) {
        console.log('Error al cargar la imagen desde Firebase Storage:', error);
      }
    };

    loadImageFromFirebase();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: '#fcfcfc' }}>
      <SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.subHeader}>CONCESIONARIO SW 5</Text>
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          {imageUrl && (
            <Image
              style={{ width: 300, height: 300, borderRadius: 10 }}
              source={{ uri: imageUrl }}
            />
          )}
        </View>

        <Text style={styles.hole} />

        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button icon='car' mode="contained" buttonColor='red' onPress={() => navigation.navigate('CATALOGO')} >
            <Text >CATÁLOGO</Text>
          </Button>
        </View>
        <Text style={styles.hole} />

        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Button
            icon="tools"
            mode="contained"
            buttonColor="red"
            onPress={() => navigation.navigate("TECNICO")}
          >
            <Text>SERVICIO MECÁNICO</Text>
          </Button>
        </View>

        <Text style={styles.hole} />

        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Button
            icon="calendar-multiple-check"
            mode="contained"
            buttonColor="red"
            onPress={() => navigation.navigate("ASESORIA")}
          >
            <Text>¿MÁS INFORMACIÓN?</Text>
          </Button>
        </View>

        <Text style={styles.hole} />

        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Button
            icon="calendar-multiple-check"
            mode="contained"
            buttonColor="red"
            onPress={() => navigation.navigate("HISTORIAL")}
          >
            <Text>HISTORIAL DE SERVICIOS</Text>
          </Button>
        </View>

        <Text style={styles.hole} />
               

        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Button
            icon="car-traction-control"
            mode="contained"
            buttonColor="red"
            onPress={() => navigation.navigate("PRUEBA DE MANEJO")}
          >
            <Text>FORMULARIO PRUEBA DE MANEJO</Text>
          </Button>
        </View>

        <Text style={styles.hole} />

        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Button
            icon="archive"
            mode="contained"
            buttonColor="red"
            onPress={() => navigation.navigate("REPORTES")}
          >
            <Text>Informes</Text>
          </Button>
        </View>
        <Text style={styles.hole} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 23,
    backgroundColor: "#ff0a0a",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 106,
  },
  hole: {
    paddingVertical: 13,
  },
});

export default HomeScreen;
