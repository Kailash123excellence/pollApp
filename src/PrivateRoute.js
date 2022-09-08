import { Navigate, Outlet } from "react-router-dom";
import PollList from "./Component/pollList";

function PrivateRoute({ isLogged, PollList }) {
  return isLogged ? <PollList/> : <Navigate to="/login" />;
}

export default PrivateRoute;
