import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function PrivateRoute({children}) {
  const navigate = useNavigate();

  const userislogin = useSelector((store) => store.Authreducer.data.user);
  if (!userislogin) {
    return <Navigate to="/login" />
  }
  return children
}
