import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const token = Cookies.get('token');
  if (!token){
    return <Navigate to="/login" />
  }
  return children;
}

export default ProtectedRoute;