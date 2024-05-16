import React, {useReducer} from "react";
import VehiculoReducer from "./vehiculoReducer";
import VehiculoContext from "./vehiculoContext";
import { SELECCIONAR_VEHICULO } from "../../types";

const VehiculoState = props => {
    //crea el state inicial
    const initialState = {
        vehiculo:[],
        vehicle: null
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(VehiculoReducer, initialState)
    const selectVehicle = vehicle =>{
        dispatch ({
            type: SELECCIONAR_VEHICULO,
            payload: vehicle
        })
    }

    return(
        <VehiculoContext.Provider
            value={{
                vehiculo: state.vehiculo,
                vehicle: state.vehicle,
                selectVehicle
            }}
        >
            {props.children}
        </VehiculoContext.Provider>
    )
}

export default VehiculoState;