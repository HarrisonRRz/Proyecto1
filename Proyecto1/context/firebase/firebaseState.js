import React, {useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import _ from 'lodash';
import { OBTENER_VEHICULOS_EXITO } from "../../types";

const FirebaseState = props => {
    //crea el state inicial
    const initialState = {
        catalog:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(FirebaseReducer, initialState)
    //Traer los datos
    const obtenerVehiculos = ()=>{
        //consulta a la bd
        firebase.db
            .collection('vehiculos')
            .onSnapshot(manejarSnapshot)// manejo de bd en tiempo real
            
            function manejarSnapshot(snapshot){
                let vehicles = snapshot.docs.map(doc =>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                });
    
                vehicles = _.sortBy(vehicles, "categoriaScrollView")
                console.log(vehicles)
                dispatch ({
                    type: OBTENER_VEHICULOS_EXITO,
                    payload: vehicles
                })
            }
    }
    return(
        <FirebaseContext.Provider
            value={{
                catalog: state.catalog,
                firebase,
                obtenerVehiculos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;