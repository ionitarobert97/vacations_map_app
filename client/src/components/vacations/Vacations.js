import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import VacationItem from "./VacationItem";
import VacationContext from "../../context/vacation/VacationContext";

const Vacations = () => {
  const vacationContext = useContext(VacationContext);

  const { vacations, filtered, getVacations, loading } = vacationContext;

  useEffect(() => {
    getVacations();
    // eslint-disable-next-line
  }, []);

  if (vacations.length === 0) {
    return <h4>Please add a vacation</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((vacation) => (
            <VacationItem hey={vacation._id} vacation={vacation} />
          ))
        : vacations.map((vacation) => (
            <VacationItem hey={vacation._id} vacation={vacation} />
          ))}
    </Fragment>
  );
};

export default Vacations;
