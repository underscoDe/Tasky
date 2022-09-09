import React from "react";
import LoginPage from "./layouts/LoginPage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="login" element={ <LoginPage /> } />
        {/* <Route path="register" element={ user ? <Home user={user} /> : <Register /> } /> */}
      </Routes>
    </>
  );
}

export default App;
