import React from "react";
import PollHomePage from "./Component/PollHomePage"
import SignUp from "./Component/SignUp";
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import LoginPage from "./Component/LoginPage";
import PollList from "./Component/pollList";
import AdminPanel from './Component/adminPanel'

export default function App() {
  return (
    <>
      {/* <PollNavbar/> */}
      <Routes>
        <Route path="/" element={<PollHomePage />} />
        <Route path="/logIn" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pollList" element={<PollList />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
      </Routes>
    </>
  );
}
