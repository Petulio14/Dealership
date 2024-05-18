import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import { getDatabase, push, ref, set } from "firebase/database";
import { app, storage } from "../../firebaseConfig";
import { ref as sRef, getDownloadURL } from "firebase/storage"; 

function TechnicalScreen ({navigation}){
    const [imageUrl, setImageUrl] = useState(null);
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    
    useEffect(() => {
        const loadImageFromFirebase = async () => {
          try {
            const pathReference = sRef(storage, 'imagenes/mechanic.png'); 
            const url = await getDownloadURL(pathReference); 
            setImageUrl(url); 
          } catch (error) {
            console.log('Error displaying the image from firesotre:', error);
          }
        };
    
        loadImageFromFirebase();
      }, []);

    const sendData = () => {
        if (name === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }
        if (idNumber === '') {
            alert('Por favor, ingresa tu número de cédula.');
            return;
        }
        if (vehiclePlate === '') {
            alert('Por favor, ingresa la placa del vehículo.');
            return;
        }

        const database = getDatabase(app); 

        const newTechnicalRef = push(ref(database, "technical_support"));
        set(newTechnicalRef, {
            name: name,
            idNumber: idNumber,
            vehiclePlate: vehiclePlate,
        })
        .then(() => {
            alert('¡Datos enviados exitosamente!');
            setName('');
            setIdNumber('');
            setVehiclePlate('');
            navigation.navigate('INICIO');
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            alert('Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo.');
        });
    };

    return( 
        <SafeAreaView>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Text style={styles.subHeader}>CONCESIONARIO SW 5</Text>
                </View>

                <View style={{justifyContent:'center'}}>
                    <Image source={{ uri: imageUrl }} style={{resizeMode:'center', width: 400, height: 200}} />
                </View>

                <Text style={styles.space} />

                <Text style={{textAlign: 'center', fontSize: 14}}>Aquí puede solicitar una cita con nuestros mecánicos para el mantenimiento de su vehículo</Text>

                <Text style={styles.space} />

                <Text style={{textAlign: 'center', fontSize: 16}}>FORMULARIO</Text>
                
                <Text style={styles.space} />

                <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder="Nombre completo"
                    maxLength={100}
                /> 
                <Text style={styles.space} /> 
        
                <TextInput 
                    value={idNumber}
                    onChangeText={text => setIdNumber(text)} 
                    placeholder="Número de cédula" 
                    keyboardType="numeric"
                    maxLength={12}
                />
                
                <Text style={styles.space} /> 
                
                <TextInput
                    value={vehiclePlate}
                    onChangeText={text => setVehiclePlate(text)}
                    placeholder="Placa del vehículo" 
                    maxLength={10}
                />  

                <Text style={styles.space} />   

                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Button icon='send' mode="contained" color='red' onPress={sendData} >
                        <Text>Enviar</Text>
                    </Button>
                </View>

            </ScrollView>
        </SafeAreaView>
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
        paddingVertical: 13
    },
});

export default TechnicalScreen;
