import React from "react";
import PollHomePage from "./Component/PollHomePage"
import SignUp from "./Component/SignUp";
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import LoginPage from "./Component/LoginPage";
import PollDeshboard from "./Component/pollDeshboard";
import AdminPanel from './Component/adminPanel'






export default function App() {
  return (
    <>
      {/* <PollNavbar/> */}
      <Routes>
        <Route path="/" element={<PollHomePage />} />
        <Route path="/logIn" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pollDeshBoard" element={<PollDeshboard />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
      </Routes>
    </>
  );
}
