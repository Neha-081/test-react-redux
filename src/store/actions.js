import { GET_DATA } from "./actionTypes.js"
import { GET_DATA_SUCCESS } from "./actionTypes.js"


export const getData=(payload)=>({
     type:GET_DATA,
     payload
})

export const getDataSuccess=(payload)=>({
     type:GET_DATA_SUCCESS,
     payload
})

