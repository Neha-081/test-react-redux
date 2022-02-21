import {
  INC_COUNT,
  DEC_COUNT,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./actionTypes.js";

const init = {
  count: 0,
  todos: {
    loading: false,
    error: false,
    data: [],
  },
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return { ...store, count: store.count + payload };
    case DEC_COUNT:
      return { ...store, count: store.count - payload };
    //    case ADD_TODO:
    //        return {...store,todos:[...store.todos,payload]};
    case ADD_TODO_LOADING:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: true,
        },
      };
    case ADD_TODO_SUCCESS:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: false,
        },
      };
    case ADD_TODO_ERROR:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: false,
          success: false,
          error: true,
        },
      };
    case GET_TODO_LOADING:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: true,
        },
      };
    case GET_TODO_SUCCESS:
      return {
        ...store,
        todos: {
          ...store.todos,
          loading: false,
          data: payload,
        },
      };
    case GET_TODO_ERROR:
      return {
        ...store,
        todos: {
          loading: false,
          error: true,
        },
      };
    default:
      return { ...store };
  }
};
