import React from "react";
import PollHomePage from "./Component/PollHomePage"
import RegisterPage from "./Component/RegisterPage";
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import PollNavbar from "./Component/common/Navbar/navbar"
// import LoginPage from "./Component/LoginPage";
import LoginPage from "./Component/RegisterPage";
export default function App() {
  return ( 
    <>
    
    {/* <RegisterPage/> */}
    <Router>
      <PollNavbar/>
    <PollHomePage/>
      <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element ={<RegisterPage/>} />
      </Routes>
    </Router> 
    
    </>
  )
}
