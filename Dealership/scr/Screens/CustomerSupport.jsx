import React from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";
import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "../../firebaseConfig";

function CustomerSupport ({navigation}){
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
   
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

        const newSupportRef = push(ref(database, "customer_support"));
        set(newSupportRef, {
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
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text style={styles.subHeader}>CONCESIONARIO SW 5</Text>
            </View>

            <View style={{justifyContent:'center'}}>
                <Image source={require('./Images/atencion-cliente.jpg')} style ={{resizeMode:'contain', width: 400, height: 200}} />
            </View>

            <Text style={styles.space} />

            <Text style={{ textAlign: 'center', fontSize: 16 }}>Agende su cita para recibir asesoramiento</Text>        

            <Text style={styles.space} />

            <Text style={{ textAlign: 'center', fontSize: 16 }}>FORMULARIO</Text>
                
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

export default CustomerSupport;