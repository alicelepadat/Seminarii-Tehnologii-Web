import * as actionTypes from "./actionTypes";

export const increment=function(){
    return {type:actionTypes.COUNTER_INCREMENT}
}

export const decrement=function(){
    return {type:actionTypes.COUNTER_DECREMENT}
}