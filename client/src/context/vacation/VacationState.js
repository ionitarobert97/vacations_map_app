import React, { useReducer } from "react";
import axios from "axios";
import VacationContext from "./VacationContext";
import VacationReducer from "./VacationReducer";
import {
  GET_VACATION,
  CLEAR_VACATION,
  ADD_VACATION,
  DELETE_VACATION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VACATION,
  FILTER_VACATIONS,
  CLEAR_FILTER,
  VACATION_ERROR,
} from "../types";

const VacationState = (props) => {
  const initialState = {
    vacations: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(VacationReducer, initialState);

  // Get Vacation
  const getVacations = async () => {
    try {
      const res = await axios.get("/api/vacations");

      dispatch({ type: GET_VACATION, payload: res.data });
    } catch (err) {
      dispatch({ type: VACATION_ERROR, payload: err.response.msg });
    }
  };

  // Add Vacation
  const addVacation = async (vacation) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/vacations", vacation, config);

      dispatch({ type: ADD_VACATION, payload: res.data });
    } catch (err) {
      dispatch({ type: VACATION_ERROR, payload: err.response.msg });
    }
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
  const filterVacation = (text) => {
    dispatch({ type: FILTER_VACATIONS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <VacationContext.Provider
      value={{
        vacations: state.vacations,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addVacation,
        deleteVacation,
        setCurrent,
        clearCurrent,
        updateVacation,
        filterVacation,
        clearFilter,
        getVacations
      }}
    >
      {props.children}
    </VacationContext.Provider>
  );
};

export default VacationState;
