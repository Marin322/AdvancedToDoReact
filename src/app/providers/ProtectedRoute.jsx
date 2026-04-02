import { Navigate, replace } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token");

    if (!isAuth) {
        return <Navigate to="/auth" replace />
    }

    return children;
}