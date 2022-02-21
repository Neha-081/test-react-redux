import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, INC_COUNT,GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR } from "./actionTypes.js"
import { DEC_COUNT } from "./actionTypes.js"
import { ADD_TODO } from "./actionTypes.js"

export const incCount=(payload)=>({
     type:INC_COUNT,payload
})
export const decCount=(payload)=>({
     type:DEC_COUNT,payload
})
export const addTodo=(payload)=>({
     type:ADD_TODO,payload
})
export const addTodoLoading=()=>({
     type:ADD_TODO_LOADING
})
export const addTodoSuccess=(payload)=>({
     type:ADD_TODO_SUCCESS,
     payload
})
export const addTodoError=()=>({
     type:ADD_TODO_ERROR
})
export const getTodoLoading=()=>({
     type:GET_TODO_LOADING
})
export const getTodoSuccess=(payload)=>({
     type:GET_TODO_SUCCESS,
     payload
})
export const getTodoError=(payload)=>({
     type:GET_TODO_ERROR,
     payload
})

