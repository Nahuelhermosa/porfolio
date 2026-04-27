// components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const access = localStorage.getItem("access_granted");

  if (!access) {
    return <Navigate to="/" />;
  }

  return children;
}