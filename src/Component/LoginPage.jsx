import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPassword("");
    setUser("");
    console.log(user);
    console.log(password);
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="registerFrom">
        <div className="registerContainer">
          <form className="inputForm" onSubmit={"handleSubmit"}>
            <h1 className="formHeading">LOGIN PAGE</h1>
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Enter Username"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <label className="form-label">Role</label>
            <select
              class="form-select mb-2"
              aria-label="Default select example"
            >
              <option selected>Guest</option>
              <option value="1">Admin</option>
            </select>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
          <p className="loginLink">
            Not a Member <Link href="/registerPage">SignUp</Link>
          </p>
        </div>
        {/* <div className="form">

        <form className="loginFrom" onSubmit={"handleSubmit"}>
        <label>UserName</label>
        <input type="text" required placeholder="Enter Username"  name="username" onChange={(e)=>setUser(e.target.value)} />
        <label>Password</label>
        <input type="password" required placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}  />
        <button type="submit">Register</button>
      </form>
        </div> */}
      </div>
    </>
  );
}
