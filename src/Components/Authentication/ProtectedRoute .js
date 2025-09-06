import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return <Navigate to="/" replace />; // redirect to login
  }

  if (role && loggedInUser.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />; // ✅ important for nested routes
};

export default ProtectedRoute;
