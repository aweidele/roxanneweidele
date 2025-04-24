import { useContext } from "react";
import { AppContext } from "./AppContext";
import { RootLayout } from "../pages/RootLayout";
import { Login } from "./Login";

export const AuthGate = () => {
  const { token, isAuthenticated } = useContext(AppContext);
  console.log(token, isAuthenticated);
  return isAuthenticated ? <RootLayout /> : <Login />;
};
