import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        // Fetch the authorization status from the backend
        fetch("http://localhost:3000/admin", {
            method: "GET",
            credentials: "include", // Ensures cookies (if used) are sent
        })
        .then(response => response.json())
        .then(data => {
            setIsAuthorized(data.isAuthorized); // Assuming API returns { isAuthorized: true/false }
        })
        .catch(() => setIsAuthorized(false));
    }, []);

    if (isAuthorized === null) return <div>Loading...</div>; // Prevent flashing before auth check

    return isAuthorized ? <Outlet /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;