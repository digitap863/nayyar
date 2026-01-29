import { Outlet, Navigate } from "react-router-dom";

function AdminPrivateRoutes() {
    // Check if the token exists in localStorage before parsing
    const adminToken = localStorage.getItem("adminToken");

    // If adminToken exists and is valid JSON, use it; otherwise, return null
    let parsedToken = null;
    if (adminToken) {
        try {
            parsedToken = JSON.parse(adminToken);
        } catch (error) {
            console.error("Invalid token format in localStorage:", error);
        }
    }

    // Return Outlet if token exists and is valid, otherwise Navigate to admin login
    return parsedToken ? <Outlet /> : <Navigate to="/admin" />;
}

export default AdminPrivateRoutes;
