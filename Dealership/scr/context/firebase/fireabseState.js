import React, { useReducer} from 'react'

import FirebaseContext from './firebaseContext'
import firebase from '../../firebase'
import vehicle from '../../Screens/Vehicle'
import firebaseReducer from './firebaseReducer'
import _ from 'lodash';

const FirebaseState = (props) => {
    // Crear el estado inicial
    const initialState = {
      menu: [],
    };
  
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
  
    const obtenerProductos = () => {
      firebase.db.collection('vehicles_list').onSnapshot(manejarSnapshot);
  
      function manejarSnapshot(snapshot) {
        let vehicles = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
  
        vehicles = _.sortBy(vehicles, 'categoriaScrollView');
        console.log(vehicles);
        dispatch({
          type: 'OBTENER_PRODUCTOS_EXITO',
          payload: vehicles,
        });
      }
    };
  
    return (
      <FirebaseContext.Provider
        value={{
          menu: state.menu,
          firebase,
          obtenerProductos,
        }}
      >
        {props.children}
      </FirebaseContext.Provider>
    );
  };
  
  export default FirebaseState;