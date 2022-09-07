import React from "react";
import PollHomePage from "./Component/PollHomePage";
import SignUp from "./Component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import PollList from "./Component/pollList";
import AdminPanel from "./Component/adminPanel";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PollHomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route element={<PrivateRoute isLogged={isLoggedIn} />}>
            <Route path="/pollList" element={<PollList />} />
          </Route>
            <Route path="/adminPanel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
}
