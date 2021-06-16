import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Register submit');
    }

    return (
        <div className="registerContainer">
            <h1>
                Account <span>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="groupRegister">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
            </form>
            <form>
                <div className="groupRegister">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
            </form>
            <form>
                <div className="groupRegister">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
            </form>
            <form>
                <div className="groupRegister">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className="btn" />
            </form>
        </div>
    )
}

export default Register;
