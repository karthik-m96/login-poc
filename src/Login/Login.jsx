import React, { useState } from 'react';
import "./Login.scss";

const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginIdChange = (e) => {
        setLoginId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("You have logged in!");
    };

    return (
        <div className="login-page">
            <div className="login-head">
                <img src="./assets/cooptex.png" alt="logo" />
                <h2>Co-optex EPF Master Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login-input">
                    <label htmlFor="loginId">Login ID: </label>
                    <input
                        type="loginId"
                        id="loginId"
                        value={loginId}
                        placeholder='Enter the Login ID'
                        onChange={handleLoginIdChange}
                    />
                </div>
                <div className="login-input">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Enter the Password'
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="login-button">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
