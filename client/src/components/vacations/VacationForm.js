import React, { useState, useContext, useEffect } from "react";
import VacationContext from "../../context/vacation/VacationContext";

const VacationForm = () => {
  const vacationContext = useContext(VacationContext);

  const { addVacation, updateVacation, current, clearCurrent } =
    vacationContext;

  useEffect(() => {
    if (current !== null) {
      setVacation(current);
    } else {
      setVacation({
        country: "",
        city: "",
        photos: "",
        location: "",
        date: "",
      });
    }
  }, [vacationContext, current]);

  const [vacation, setVacation] = useState({
    country: "",
    city: "",
    photos: "",
    location: "",
    date: "",
  });

  const clearAll = () => {
    clearCurrent();
  };

  const { country, city, photos, location, date } = vacation;

  const onChange = (e) =>
    setVacation({ ...vacation, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addVacation(vacation);
    } else {
      updateVacation(vacation);
    }
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
      <h2 className="vacationTitle">
        {current ? "Edit Vacation" : "Add Vacation"}
      </h2>
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
        <input
          className="btnSubmit"
          type="submit"
          value={current ? "Update Vacation" : "Add Vacation"}
        />
      </div>
      {current && (
        <div>
          <button className="btnClear" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default VacationForm;
