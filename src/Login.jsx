import React, { useState } from 'react';

export const Login = (props) =>{
    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-conatiner">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input value={email} type="email" placeholder="YourEmailName@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} type="passwrod" placeholder="***************" id="password" name="password"/>
                <button type='submit'>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
        </div>
    )
}