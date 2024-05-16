import { SELECCIONAR_VEHICULO } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case SELECCIONAR_VEHICULO:
            return{
                ...state,
                vehicle: action.payload
            }
        default:
            return state;
    }
}