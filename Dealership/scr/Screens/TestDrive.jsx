import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";
import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "../../firebaseConfig";

function TestDrive({ navigation }) {
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendData = () => {
    if (name === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    if (idNumber === "") {
      alert("Por favor, ingresa tu número de cédula.");
      return;
    }
    if (phoneNumber === "") {
      alert("Por favor, ingresa tu número de teléfono.");
      return;
    }

    const database = getDatabase(app); 

    const newDriveRef = push(ref(database, "test_drives"));
    set(newDriveRef, {
      name: name,
      idNumber: idNumber,
      phoneNumber: phoneNumber,
    })
      .then(() => {
        alert("¡Datos enviados exitosamente!");
        setName("");
        setIdNumber("");
        setPhoneNumber("");
        navigation.navigate('INICIO');
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        alert(
          "Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo."
        );
      });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Text style={styles.subHeader}>CONCESSIONAIRE SW 5</Text>
      </View>

      <View style={{ justifyContent: "center" }}>
        <Image
          source={require("./Images/TestDrive.png")}
          style={{ resizeMode: "contain", width: 400, height: 200 }}
        />
      </View>

      <Text style={styles.space} />

      <Text style={{ textAlign: "center", fontSize: 16 }}>
        Programa tu prueba de manejo
      </Text>

      <Text style={styles.space} />

      <Text style={{ textAlign: "center", fontSize: 16 }}>FORMULARIO</Text>

      <Text style={styles.space} />

      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nombre Completo"
        maxLength={100} 
      />
      <Text style={styles.space} />

      <TextInput
        value={idNumber}
        onChangeText={(text) => setIdNumber(text)}
        placeholder="Número de Cédula"
        keyboardType="numeric"
        maxLength={12} 
      />

      <Text style={styles.space} />

      <TextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Número de Teléfono"
        keyboardType="numeric"
        maxLength={11}
      />

      <Text style={styles.space} />

      <View
        style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}
      >
        <Button icon="send" mode="contained" color="red" onPress={sendData}>
          <Text>Enviar</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

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
  space: {
    paddingVertical: 13,
  },
});

export default TestDrive;