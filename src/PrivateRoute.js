import { Outlet, Navigate } from "react-router-dom";
import * as React from "react";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  console.log("hello");
  console.log(token, "token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
