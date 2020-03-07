import {
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_START
} from "../actions/SmurfAction";

const initialState = {
  name: "",
  age: 0,
  height: ""
};

export const SmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        name: "",
        age: "",
        height: ""
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        id: Date.now()
      };
    default:
      return state;
  }
};
