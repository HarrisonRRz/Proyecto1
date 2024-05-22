import React, {useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import _ from 'lodash';
import { GET_SUCCESSFUL_VEHICLES } from "../../types";

const FirebaseState = props => {
    //crea el state inicial
    const initialState = {
        catalog:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(FirebaseReducer, initialState)
    //Traer los datos
    const bringVehicles = ()=>{
        //consulta a la bd
        firebase.db
            .collection('vehiculos')
            .onSnapshot(driveSnapshot)// manejo de bd en tiempo real
            
            function driveSnapshot(snapshot){
                let vehicles = snapshot.docs.map(doc =>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                });
    
                vehicles = _.sortBy(vehicles, "categoriaScrollView")
                console.log(vehicles)
                dispatch ({
                    type: GET_SUCCESSFUL_VEHICLES,
                    payload: vehicles
                })
            }
    }
    return(
        <FirebaseContext.Provider
            value={{
                catalog: state.catalog,
                firebase,
                bringVehicles
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;