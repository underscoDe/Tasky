import React from "react";
import LoginPage from "./layouts/LoginPage";
import RegisterPage from "./layouts/RegisterPage";
import Dashboard from "./layouts/Dashboard";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
      </Routes>
    </>
  );
}

export default App;
