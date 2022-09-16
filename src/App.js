import React from "react";
import PollHomePage from "./Component/PollHomePage";
import SignUp from "./Component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import PollList from "./Component/pollList";
import AdminPanel from "./Component/adminPanel";
import PrivateRoute from "./PrivateRoute";
import { Outlet, Navigate } from "react-router-dom";
import AddNewPoll from "./Component/AddNewPoll";
import EditTitle from "./Component/EditTitle";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/pollList" element={<PollList />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/addNewPoll" element={<AddNewPoll />} />
            <Route path="/editTitle/:id" element={<EditTitle />} />
          </Route>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}
