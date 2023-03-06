import './App.css';
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login/Login';
import Signup from './component/Login/Signup';
import Navbar from './component/Navbar';
import Main from './component/Main';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) => {
    setCurrentForm(forName);
    ;
  }
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/login" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />} />
        <Route path="/films" element={<Main />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
