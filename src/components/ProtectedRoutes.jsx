import { Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoutes = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(null)

    


    if(isAuthorized === null){
        return <div>Loading..</div>
    } 
    return isAuthorized ? children :
    <Navigate to="/login"/>
}