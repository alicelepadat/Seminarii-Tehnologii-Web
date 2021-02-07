import * as actionTypes from "./actionTypes";

export const loadUser=function(){
   var isValid=true;
   if(isValid) return {type: actionTypes.USER_LOADED_SUCCEEDED, data: [{id:1, name: "Alice"}]};
    else return {type: actionTypes.USER_LOADED_FAILED};
}

export const decrement=function(){
    return {type:actionTypes.COUNTER_DECREMENT}
}