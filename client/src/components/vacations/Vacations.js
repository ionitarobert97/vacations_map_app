import React, { Fragment, useContext } from "react";
import VacationItem from "./VacationItem";
import VacationContext from "../../context/vacation/VacationContext";

const Vacations = () => {
  const vacationContext = useContext(VacationContext);

  const { vacations } = vacationContext;

  return (
    <Fragment>
      {vacations.map((vacation) => (
        <VacationItem hey={vacation.id} vacation={vacation} />
      ))}
    </Fragment>
  );
};

export default Vacations;
