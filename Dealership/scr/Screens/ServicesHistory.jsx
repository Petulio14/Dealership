import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import { app, storage } from "../../firebaseConfig";
import { ref as sRef, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, push, set } from "firebase/database";

const ServicesHistory = () => {
  const [reg, setReg] = useState([]);
  const [vehiculo, setVehiculo] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [typeService, setTypeService] = useState("Venta");
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImageFromFirebase = async () => {
      try {
        const pathReference = sRef(storage, "imagenes/mechanic.png");
        const url = await getDownloadURL(pathReference);
        setImageUrl(url);
      } catch (error) {
        console.log("Error displaying the image from firesotre:", error);
      }
    };

    loadImageFromFirebase();
  }, []);
  const sendData = () => {
    if (vehiculo === "") {
      alert("Por favor, ingresa el vehículo.");
      return;
    }
    if (date === "") {
      alert("Por favor, ingresa la fecha de ingreso.");
      return;
    }
    if (typeService === "") {
      alert("Por favor, selecciona el tipo de servicio.");
      return;
    }

    const database = getDatabase(app);

    const newRegRef = push(ref(database, "serviceRegistrations"));
    set(newRegRef, {
      vehicle: vehiculo,
      date: date,
      typeService: typeService,
    })
      .then(() => {
        alert("¡Datos enviados exitosamente!");
        setReg((prevReg) => [
          ...prevReg,
          {
            vehiculo: vehiculo,
            date: date,
            typeService: typeService,
          },
        ]);
        setVehiculo("");
        setDate(new Date().toLocaleDateString());
        setTypeService("Venta");
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        alert(
          "Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo."
        );
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <Text style={styles.subHeader}>CONCESIONARIO SW 5</Text>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Image
            source={{ uri: imageUrl }}
            style={{ resizeMode: "center", width: 400, height: 200 }}
          />
        </View>

        <View>
          <Text>Vehículo:</Text>
          <TextInput
            value={vehiculo}
            onChangeText={(text) => setVehiculo(text)}
            placeholder="Vehiculo"
          />

          <Text>Fecha de ingreso:</Text>
          <TextInput
            value={date}
            onChangeText={(text) => setDate(text)}
            placeholder="Fecha de ingreso"
          />

          <Text>Tipo de servicio:</Text>
          <RNPickerSelect
            onValueChange={(value) => setTypeService(value)}
            items={[
              { label: "Venta", value: "Venta" },
              { label: "Garantía", value: "Garantía" },
              { label: "Cotización", value: "Cotización" },
            ]}
            value={typeService}
          />

          <Button title="Agregar Registro" onPress={sendData} color="red" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
});

export default ServicesHistory;
