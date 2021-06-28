import React, { useContext, useEffect } from "react";
import Vacations from "../vacations/Vacations";
import VacationForm from "../vacations/VacationForm";
import VacationFilter from "../vacations/VacationFilter";
import AuthContext from "../../context/auth/authContext";
import GoogleMap from "../google-map/GoogleMap";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="containerVacations">
        <div>
          <GoogleMap />
        </div>
        <div>
          <VacationForm />
          <VacationFilter />
          <Vacations />
        </div>
      </div>
    </>
  );
};

export default Home;
