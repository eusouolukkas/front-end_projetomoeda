import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

interface CustomRoute extends RouteProps {
  isPrivate: boolean;
}

export default function CustomRoute({ isPrivate, ...rest }: CustomRoute) {
  const { loading, authenticated } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}
