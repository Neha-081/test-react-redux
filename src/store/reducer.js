import {
  GET_DATA,
  GET_DATA_SUCCESS
 
} from "./actionTypes.js";

const init = {
  engine: {
    data: [],
  }
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...store,
        engine: {
          ...store.engine,
          data: payload,
        },
      };
      case GET_DATA_SUCCESS:
        return {
          ...store,
          engine: {
            ...store.engine,
            data: payload,
          },
        };
    
    default:
      return { ...store };
  }
};
