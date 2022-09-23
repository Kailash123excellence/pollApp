import React from "react";
import SignUp from "./Component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import PollApp from "./Component/pollApp";
import PrivateRoute from "./PrivateRoute";
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
            <Route path="/pollApp" element={<PollApp/>} />
            <Route path="/addNewPoll" element={<AddNewPoll />} />
            <Route path="/editTitle/:id" element={<EditTitle />} />
          </Route>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}
