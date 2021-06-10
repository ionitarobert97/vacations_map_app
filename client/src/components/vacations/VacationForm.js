import React, { useState, useContext } from "react";
import VacationContext from "../../context/vacation/VacationContext";
import Vacations from "./Vacations";

const VacationForm = () => {
  const vacationContext = useContext(VacationContext);

  const [vacation, setVacation] = useState({
    country: "",
    city: "",
    photos: "",
    location: "",
    date: "",
  });

  const { country, city, photos, location, date } = vacation;

  const onChange = e =>
    setVacation({ ...vacation, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    vacationContext.addVacation(vacation);
    setVacation({
      country: "",
      city: "",
      photos: "",
      location: "",
      date: "",
    });
  };

  return (
    <form onSubmit={onSubmit} className="myForm">
      <h2 className="vacationTitle">Add Vacation</h2>
      <input
        className="myInput"
        type="text"
        name="country"
        placeholder="country"
        value={country}
        onChange={onChange}
      />
      <input
        className="myInput"
        type="text"
        name="city"
        placeholder="city"
        value={city}
        onChange={onChange}
      />
      <input
        className="myInput"
        type="text"
        name="location"
        placeholder="location"
        value={location}
        onChange={onChange}
      />
      <input
        className="myInput"
        type="text"
        name="photos"
        placeholder="photos"
        value={photos}
        onChange={onChange}
      />
      <input
        className="myInput"
        type="date"
        name="date"
        placeholder="date"
        value={date}
        onChange={onChange}
      />
      <div>
        <input className="btnSubmit" type="submit" value="Add Vacation" />
      </div>
    </form>
  );
};

export default VacationForm;
