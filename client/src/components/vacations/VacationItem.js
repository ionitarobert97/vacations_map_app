import React, { useContext } from "react";
import PropTypes from "prop-types";
import VacationContext from "../../context/vacation/VacationContext";

const VacationItem = ({ vacation }) => {
  const vacationContext = useContext(VacationContext);
  const { deleteVacation, setCurrent, clearCurrent } = vacationContext;

  const { _id, country, city, photos, checkOutDate, checkInDate } = vacation;

  const onDelete = () => {
    deleteVacation(_id);
    clearCurrent();
  };

  return (
    <div className="card-vacation">
      <h2 className="text-vacation-1st">{country}</h2>
      <h3 className="text-vacation-2nd">
        {city}
      </h3>
      <div className="container-photos">{photos}</div>
      <h4 className="vacation-date">Check-In Date: {checkInDate}</h4>
      <h4 className="vacation-date">Check-Out Date: {checkOutDate}</h4>
      <p>
        <button className="btn btn-edit" onClick={() => setCurrent(vacation)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

VacationItem.prototype = {
  vacation: PropTypes.object.isRequired,
};

export default VacationItem;
