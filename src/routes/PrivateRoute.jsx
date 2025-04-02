import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <div className="h-full w-full  flex justify-center items-center"><span className="loading loading-infinity loading-xl h-full mt-[300px]"></span></div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;