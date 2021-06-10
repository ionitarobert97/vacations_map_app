import {
  ADD_VACATION,
  DELETE_VACATION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VACATION,
  FILTER_VACATIONS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_VACATION:
      return {
        ...state,
        vacations: [...state.vacations, action.payload],
      };
    default:
      return state;
  }
};
