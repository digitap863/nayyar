import { Navigate, Outlet } from "react-router-dom";

function AdminPublicRoutes() {
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

  // Redirect to dashboard if token exists and is valid, otherwise show Outlet
  return parsedToken ? <Navigate to="/admin/dashboard" /> : <Outlet />;
}

export default AdminPublicRoutes;
