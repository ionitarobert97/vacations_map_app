import React, { useReducer } from "react";
import uuid from "uuid";
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
  };

  const [state, dispatch] = useReducer(VacationReducer, initialState);

  // Add Vacation

  // Delete Vacation

  // Set Current Vacation

  // Clear Current Vacation

  // Update Vacation

  // Filter Vacations

  // Clear Filter

  return (
    <VacationContext.Provider
      value={{
        vacations: state.vacations,
      }}
    >
      {props.children}
    </VacationContext.Provider>
  );
};

export default VacationState;
