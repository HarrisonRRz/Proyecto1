import React, {useReducer} from "react";
import VehicleReducer from "./vehicleReducer";
import VehicleContext from "./vehicleContext";
import { SELECT_VEHICLE, CONFIRM_VEHICLE } from "../../types";

const VehicleState = props => {
    //crea el state inicial
    const initialState = {
        vehicles:[],
        vehicle: null,
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(VehicleReducer, initialState)
    const selectVehicle = vehicle =>{
        dispatch ({
            type: SELECT_VEHICLE,
            payload: vehicle
        })
    }

    const saveVehicle = vehicles =>{
        dispatch({
            type: CONFIRM_VEHICLE,
            payload: vehicles
        })
    }

    return(
        <VehicleContext.Provider
            value={{
                vehicles: state.vehiculo,
                vehicle: state.vehicle,
                selectVehicle,
                saveVehicle,
            }}
        >
            {props.children}
        </VehicleContext.Provider>
    )
}

export default VehicleState;