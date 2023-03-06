import React, { useState } from "react";
function Signup(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Signup</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="fullname" id="name" name="name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                    <button type="submit">Login</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? login.</button>
            </div>
        </div>
    )
}
export default Signup;