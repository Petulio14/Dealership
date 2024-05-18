import React, { useState, useEffect, useContext } from 'react';
import VehicleList from './VehicleList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import FirebaseContext from '../context/firebase/firebaseContext';
import vehiclesContext from '../context/vehicles/pedidos/vehiclesContext';

const Catalogue = () => {
  const [vehicles, setVehicles] = useState([]);
 const {menu, obtenerProductos} = useContext(FirebaseContext)

  const getVehicleData = async () => {
    const vehiclesCollection = collection(db, 'vehicles_list');
    const querySnapshot = await getDocs(vehiclesCollection);
  
    const vehicles = [];
    querySnapshot.forEach((doc) => {
      const vehicleData = doc.data();
      vehicles.push({
        id: doc.id,
        imageUrl: vehicleData.imageUrl,
        description: vehicleData.description,
        price: vehicleData.price
      });
    });
  
    return vehicles;
  };
  
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehicleData = await getVehicleData();
        setVehicles(vehicleData);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  return <VehicleList vehicles={vehicles} />;
};

export default Catalogue;