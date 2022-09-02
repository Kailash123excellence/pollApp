import React from 'react'
import { Link } from '@mui/material';
// import {Link} from 'react-router-dom'
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
                <Link className="NavSignLink" to="/logIn">
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
          {/* <button >
            <Link>SignIn</Link>
          </button>
          <button >
            <Link>LoginIn</Link>
          </button> */}
        </div>
      </nav>
    </>
  );
}
