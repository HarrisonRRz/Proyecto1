import { SELECT_VEHICLE, CONFIRM_VEHICLE } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case SELECT_VEHICLE:
            return{
                ...state,
                vehicle: action.payload
            }
        case CONFIRM_VEHICLE:
            return{
                ...state,
                vehicles: [...state.vehicles, action.payload]
            }
        default:
            return state;
    }
}