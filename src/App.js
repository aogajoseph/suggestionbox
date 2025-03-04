import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonalSignUp from "./components/PersonalSignUp";
import BusinessSignUp from "./components/BusinessSignUp";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/personal" element={<PersonalSignUp />} />
        <Route path="/signup/business" element={<BusinessSignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
