import { useAppContext } from "./AppContext";
import { RootLayout } from "../pages/RootLayout";
import { Login } from "./Login";

export const AuthGate = () => {
  const { token, isAuthenticated } = useAppContext();
  return isAuthenticated ? <RootLayout /> : <Login />;
};
