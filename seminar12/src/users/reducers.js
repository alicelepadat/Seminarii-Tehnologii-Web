
import initialState from '../initialState';
import * as actionTypes from "./actionTypes";

const counterReducer = function(state = initialState.counter, action){
    switch(action.type){
        case actionTypes.USER_LOADED_SUCCEEDED:
            return 
        case actionTypes.USER_LOADED_FAILED:
            return 
        default:
            return state;   
        
    }
}

export default counterReducer;