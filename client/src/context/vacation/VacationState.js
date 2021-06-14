import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import VacationContext from "./VacationContext";
import VacationReducer from "./VacationReducer";
import {
  ADD_VACATION,
  DELETE_VACATION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VACATION,
  FILTER_VACATIONS,
  CLEAR_FILTER,
} from "../types";

const VacationState = (props) => {
  const initialState = {
    vacations: [
      {
        id: 1,
        country: "France",
        city: "Paris",
        photos: "da",
        location: "google-location",
        date: "yes",
      },
      {
        id: 2,
        country: "Romania",
        city: "Bucharest",
        photos: "da",
        location: "google-location",
        date: "yes",
      },
      {
        id: 3,
        country: "Spain",
        city: "Madrid",
        photos: "da",
        location: "google-location",
        date: "yes",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(VacationReducer, initialState);

  // Add Vacation
  const addVacation = (vacation) => {
    vacation.id = uuid();
    dispatch({ type: ADD_VACATION, payload: vacation });
  };

  // Delete Vacation
  const deleteVacation = (id) => {
    dispatch({ type: DELETE_VACATION, payload: id });
  };

  // Set Current Vacation
  const setCurrent = (vacation) => {
    dispatch({ type: SET_CURRENT, payload: vacation });
  };

  // Clear Current Vacation
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Vacation
  const updateVacation = (vacation) => {
    dispatch({ type: UPDATE_VACATION, payload: vacation });
  };

  // Filter Vacations

  // Clear Filter

  return (
    <VacationContext.Provider
      value={{
        vacations: state.vacations,
        addVacation,
        deleteVacation,
        current: state.current,
        setCurrent,
        clearCurrent,
        updateVacation
      }}
    >
      {props.children}
    </VacationContext.Provider>
  );
};

export default VacationState;
