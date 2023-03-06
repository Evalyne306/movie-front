
//..............................
import pic from "/home/student/Development/code/phase5/movie-front/src/bird.jpg"
import React, { useState } from "react";
function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
 
    return (
      <div>
         <div className="home-style">
        <h2 className='header-one'>MOVIE FINDER<img src={pic} alt="brd" width= "80px" height= "60"/></h2>
        
        <p className="para"><em><b> Movie Finder makes it easy to enjoy what matters most to you!!</b></em></p>
        <p className="para1"> It gives you a chance to interact with your movies</p>
        <p className="para2">  and so much more..</p>
        <div className="App">
            <div className="auth-form-container1">
               <h2 classname="log">Login</h2> 
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                    <button className="login-btn" type="submit">Login</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch("sign up")}>Don't have an account? Sign up.</button>
            </div>
            
        </div>
       
      </div>
      
    </div>
    )
}
export default Login;
//............................
