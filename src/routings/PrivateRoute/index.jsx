import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");

  return token ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
