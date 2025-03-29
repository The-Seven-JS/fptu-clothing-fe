import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Tower from "./utils/LoadingPage";
const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        // Fetch the authorization status from the backend
        fetch("https://be.fuct.gay/admin", {
            method: "GET",
            credentials: "include", // Ensures cookies (if used) are sent
        })
        .then(response => response.json())
        .then(data => {
            setIsAuthorized(data.isAuthorized); // Assuming API returns { isAuthorized: true/false }
        })
        .catch(() => setIsAuthorized(false));
    }, []);

    if (isAuthorized === null) 
    return (
        <div>
            {<Tower/>}
        </div>
    )
    return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;