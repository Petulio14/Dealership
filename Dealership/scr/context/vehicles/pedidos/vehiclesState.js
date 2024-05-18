import React, { useReducer} from 'react'

import vehiclesReducer from './vehiclesReducer'
import vehiclesContext from './vehiclesContext'
const VehicleStage = props =>{
    //crea el state inicial
    const initialState={
        pedido:[],
        vehicle: null,
        total: 0
    }

    //userReducer con el dispatch
    const [ state, dispatch] = useReducer(vehiclesReducer,initialState)

    //Selecciona el producto que desea ordenar
    const selecionarVehicle = vehicle =>{
        dispatch({
            type: 'SELECCIONAR_PRODUCTO',
            payload: vehicle //Lo que cambia el state
        })
    }

    //Cuando se confirma el pedido
    const guardarPedido = pedido =>{
        dispatch({
            type: 'CONFIRMAR_ORDENAR_VEHICLE',
            payload: pedido
        })
    }

    //Mostrar el total a pagar en el resumen
    const mostrarResumen = total =>{
        dispatch({
            type: 'MOSTRAR_RESUMEN',
            payload: total
        })
    }

    //ELIMINAR UN ARTICULO
    const eliminarProducto = id =>{
        dispatch({
            type: 'ELIMINAR_PRODUCTO',
            payload: id
        })

    }

    return(
        <vehiclesContext.Provider
            value={{
                pedido: state.pedido,
                vehicle: state.vehicle,
                total: state.total,
                selecionarVehicle,
                guardarPedido,
                mostrarResumen,
                eliminarProducto
            }}
        >
            {props.children}
        </vehiclesContext.Provider>
    )

}

export default VehicleStage
