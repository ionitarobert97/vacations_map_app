import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import VacationContext from "../../context/vacation/VacationContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const vacationContext = useContext(VacationContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearVacations } = vacationContext;

  const onLogout = () => {
    logout();
    clearVacations();
  }

  const authLinks = (
    <Fragment>
      <li>
        <a className="logout" onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i> <span className="hiddenMobile">Logout</span>
        </a>
      </li>
      <li className='userName'>Hello {user && user.name} </li>
    </Fragment>
  );
  
  const guestLinks = (
    <Fragment>
      <li>
          <Link className="NavBarRegisterLogin" to="/register">Register</Link>
        </li>
        <li>
          <Link className="NavBarRegisterLogin" to="/login">Login</Link>
        </li>
    </Fragment>
  );
  
  return (
    <div className="navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Vacation App",
  icon: "fas fa-map-marked-alt",
};

export default Navbar;
