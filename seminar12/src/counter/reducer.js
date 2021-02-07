
import initialState from '../initialState';
import * as actionTypes from "./actionTypes";

const counterReducer = function(state = initialState.counter, action){
    switch(action.type){
        case actionTypes.COUNTER_INCREMENT:
            return ++state;
        case actionTypes.COUNTER_DECREMENT:
            return --state;
        default:
            return state;   
        
    }
}

export default counterReducer;