import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <div className="registerContainer">
      <h1>
        Account <span>Login</span>
      </h1>
      <form>
        <div className="groupRegister">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
      </form>
      <form>
        <div className="groupRegister">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="Login"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
