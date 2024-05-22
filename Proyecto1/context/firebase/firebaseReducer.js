import { GET_SUCCESSFUL_VEHICLES } from "../../types";

export default (state, action) =>{
    switch(action.type){
        case GET_SUCCESSFUL_VEHICLES:
            return{
                ...state,
                catalog: action.payload
            }
        default:
            return state;
    }
}