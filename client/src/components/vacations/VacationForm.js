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

  const { country, city, photos, checkInDate, checkOutDate } = vacation;

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
      <span>Please enter vacation images</span>
      <input
        className="myInput"
        type="file"
        name="photos"
        placeholder="photos"
        accept="image/*"
        value={photos}
        onChange={onChange}
      />
      <span>Check-in</span>
      <input
        className="myInput"
        type="date"
        name="date"
        placeholder="date"
        value={checkInDate}
        onChange={onChange}
      />
      <span>Check-out</span>
      <input
        className="myInput"
        type="date"
        name="date"
        placeholder="date"
        value={checkOutDate}
        onChange={onChange}
      />
      <div className="divFormSubmit">
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
