import React, { useContext, useEffect } from "react";
import Vacations from "../vacations/Vacations";
import VacationForm from "../vacations/VacationForm";
import VacationFilter from "../vacations/VacationFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="containerVacations">
      <div>
        <VacationForm />
      </div>
      <div>
        <VacationFilter />
        <Vacations />
      </div>
    </div>
  );
};

export default Home;
