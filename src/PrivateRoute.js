import {Outlet, Navigate} from 'react-router-dom';


const PrivateRoute= ()=>{
  let auth= {'token':false}
  return (
    auth.token ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoute







// import { Navigate, Outlet } from "react-router-dom";
// import PollList from "./Component/pollList";

// function PrivateRoute({ isLogged, PollList }) {
//   return isLogged ? <PollList/> : <Navigate to="/login" />;
// }

// export default PrivateRoute;
