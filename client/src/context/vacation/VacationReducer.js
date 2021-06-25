import {
  ADD_VACATION,
  DELETE_VACATION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VACATION,
  FILTER_VACATIONS,
  CLEAR_FILTER,
  VACATION_ERROR,
  GET_VACATION,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_VACATION:
      return {
        ...state,
        vacations: action.payload,
        loading: false
      }
    case ADD_VACATION:
      return {
        ...state,
        vacations: [...state.vacations, action.payload],
        loading: false
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
    case FILTER_VACATIONS:
      return {
        ...state,
        filtered: state.vacations.filter(vacation => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return vacation.country.match(regex) || vacation.country.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    case VACATION_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
