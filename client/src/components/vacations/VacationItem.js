import React from "react";
import PropTypes from "prop-types";

const VacationItem = ({ vacation }) => {
  const { id, country, city, photos, location, date } = vacation;

  return (
    <div className="card-vacation">
      <h2 className="text-vacation-1st">{country}</h2>
      <h3 className="text-vacation-2nd">
        {city} <span>{location}</span>
      </h3>
      <div className="container-photos">{photos}</div>
      <h4 className="vacation-date">{date}</h4>
      <p>
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete">Delete</button>
      </p>
    </div>
  );
};

VacationItem.prototype = {
  vacation: PropTypes.object.isRequired,
};

export default VacationItem;
