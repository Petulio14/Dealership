import React, { useEffect, useState } from 'react'
import {  Text, View, Image } from 'react-native'
import { storage } from "../../firebaseConfig";
import { ref as sRef, getDownloadURL } from "firebase/storage";

const CarDetails = () => {

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImageFromFirebase = async () => {
      try {
        const pathReference = sRef(storage, "imagenes/Vehicle.png");
        const url = await getDownloadURL(pathReference);
        setImageUrl(url);
      } catch (error) {
        console.log("Error displaying the image from firesotre:", error);
      }
    };

    loadImageFromFirebase();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={{ uri: imageUrl }} style ={{width: 320,height: 440,borderRadius: 18, resizeMode: 'center'}}/>
        
        <Text> Descripcion complenta </Text>
    </View>
  )
}

export default CarDetails
