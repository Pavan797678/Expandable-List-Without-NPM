import store from "../store";
import types from "../types";

const {dispatch} = store

export const moneyAdd = data =>{
 
    dispatch({
        type:types.ADD,
        payload:data,
    })
}