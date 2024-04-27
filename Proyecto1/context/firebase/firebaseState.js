import React, {useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";

const FirebaseState = props => {
    //crea el state inicial
    const inicialState = {
        catalog:[]
    }

    //useReducer con el dispatch
    const [ state, dispatch] = useReducer(FirebaseReducer, inicialState)

    return(
        <FirebaseContext.Provider
            value={{
                catalog: state.catalog,
                firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;