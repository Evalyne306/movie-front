// // import React, { useState, useEffect } from "react";
 import axios from "axios";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [user, setUser] = useState();

// //   useEffect(() => {
// //     const loggedInUser = localStorage.getItem("user");
// //     if (loggedInUser) {
// //       const foundUser = JSON.parse(loggedInUser);
// //       setUser(foundUser);
// //     }
// //   }, []);

// //   // logout the user
// //   const handleLogout = () => {
// //     setUser({});
// //     setUsername("");
// //     setPassword("");
// //     localStorage.clear();
// //   };

// //   // login the user
// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     const user = { username, password };
// //     // send the username and password to the server
// //     const response = await axios.post(
// //       "http://blogservice.herokuapp.com/api/login",
// //       user
// //     );
// //     // set the state of the user
// //     setUser(response.data);
// //     // store the user in localStorage
// //     localStorage.setItem("user", JSON.stringify(response.data));
// //   };

// //   // if there's a user show the message below
// //   if (user) {
// //     return (
// //       <div>
// //         {user.name} is loggged in
// //         <button onClick={handleLogout}>logout</button>
// //       </div>
// //     );
// //   }

// //   // if there's no user, show the login form
// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="username">Username: </label>
// //         <input
// //           type="text"
// //           value={username}
// //           placeholder="enter a username"
// //           onChange={({ target }) => setUsername(target.value)}
// //         />
// //         <div>
// //           <label htmlFor="password">password: </label>
// //           <input
// //             type="password"
// //             value={password}
// //             placeholder="enter a password"
// //             onChange={({ target }) => setPassword(target.value)}
// //           />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



// //...............
import React, { useState } from "react";
function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/users', {
            user: {
              email: email,
              password: pass,
            },
           
          });
          console.log(response)
          // handle successful login
        } catch (error) {
          // handle errors
        }
       
      };

    
    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                    <button className="login-bton" type="submit">Login</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch("sign up")}>Don't have an account? Sign up.</button>
            </div>
        </div>
    )
}
export default Login;