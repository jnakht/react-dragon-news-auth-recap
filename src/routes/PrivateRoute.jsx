import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('this is the location in private route', location)
    if (loading) {
        return <div className="h-full w-full  flex justify-center items-center"><span className="loading loading-infinity loading-xl h-full mt-[300px]"></span></div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;