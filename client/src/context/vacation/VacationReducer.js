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
    case UPDATE_VACATION:
      return {
        ...state,
        vacations: state.vacations.map((vacation) =>
          vacation.id === action.payload.id ? action.payload : vacation
        ),
      };
    case DELETE_VACATION:
      return {
        ...state,
        vacations: state.vacations.filter(
          (vacation) => vacation.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
