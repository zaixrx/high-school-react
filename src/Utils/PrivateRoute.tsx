import { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ( { children } : any ) => {
    const user = null;

    return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;