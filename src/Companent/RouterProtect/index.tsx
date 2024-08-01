import Cookies from "js-cookie"
import React from "react";
import { Navigate } from "react-router-dom"
interface RouteProtectorProps{
    children: React.ReactNode;
}
const RouteProtector:React.FC<RouteProtectorProps>= ({children}) => {
    const token = Cookies.get("token")
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <>
        {children}
    </>
};
export default RouteProtector;