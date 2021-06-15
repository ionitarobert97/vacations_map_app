import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import VacationItem from "./VacationItem";
import VacationContext from "../../context/vacation/VacationContext";

const Vacations = () => {
  const vacationContext = useContext(VacationContext);

  const { vacations, filtered } = vacationContext;

  if (vacations.length === 0) {
    return <h4>Please add a vacation</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((vacation) => (
            <VacationItem hey={vacation.id} vacation={vacation} />
          ))
        : vacations.map((vacation) => (
            <VacationItem hey={vacation.id} vacation={vacation} />
          ))}
    </Fragment>
  );
};

export default Vacations;
