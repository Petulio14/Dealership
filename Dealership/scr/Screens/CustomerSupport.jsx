import React from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-paper";

function CustomerSupport ({navigation}){
    const [text, SetText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
   
    return(
    <ScrollView>
            
        <View style={{ flex: 1, justifyContent: 'flex-star' }}>
          <Text style={styles.subHeader}>CONCESIONARIO SW 5</Text>
         </View>

         <View style={{justifyContent:'center'}}>
            <Image source={require('./Images/atencion-cliente.jpg')} style ={{resizeMode:'contain', width: 400, height: 200}}></Image>
         </View>

        <Text style ={styles.hole} />

        <Text style = {{textAlign: 'center', fontSize: 16}}>Agende su cita para recibir asesoramiento</Text>        

        <Text style ={styles.hole} />

        <Text style = {{textAlign: 'center', fontSize: 16}}>FORMULARIO</Text>
            
        <Text style ={styles.hole} />

        <TextInput
            value={text}
            onChangeText={text =>SetText(text)}
            placeholder="Nombre completo"
        /> 
        <Text style ={styles.hole} /> 

        <TextInput 
            onChangeText={onChangeNumber} 
            placeholder="Número de cédula" 
            keyboardType="numeric"/>
        
        <Text style ={styles.hole} /> 
        
        <TextInput
            placeholder="Placa del vehículo" 
            value={text}
            onChangeText={text =>SetText(text)}
        />  

            <Text style ={styles.hole} />   


        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button icon='send' mode="contained" buttonColor='red' onPress={() => navigation.navigate('INICIO')} >
            <Text >Enviar</Text>
            </Button>
        </View>

        
    </ScrollView>         
    );
}
const styles = StyleSheet.create({
    subHeader: {
      fontSize: 23,
      backgroundColor : "#ff0a0a",
      color : "white",
      textAlign : "center",
      paddingVertical : 10,
      marginBottom : 10,
      paddingHorizontal: 106,
      
    },
    hole: {
        paddingVertical: 13

    },
    
  });


export default CustomerSupport