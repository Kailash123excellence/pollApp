import React from 'react'
import { Link } from '@mui/material';
// import {Link} from 'react-router-dom'
import login from '../../LoginPage';
import SignUp from '../../SignUp';

export default function PollNavbar() {
  return (
    <>
      <nav className="pollNav">
        <h1 className="poll">Poll App</h1>

        <div className="navbarButton">
          <ul className="order">
            <li className="listOrder">
              {/* <Link to="/login">Login</Link> */}
              <button className="NavSignLink">
                <Link className="NavSignLink" to="/login">
                  LogIn
                </Link>
              </button>
            </li>
            <li className="listOrder">
              {/* <Link to="/signUp">Sign Up</Link> */}
              <button className="NavSignLink">
                <Link className="NavSignLink" to="/signUp">
                  signUp
                </Link>
              </button>
            </li>
          </ul>
        
        </div>
      </nav>
    </>
  );
}
