import { createBrowserRouter } from "react-router-dom";
import { getIsAuthenticated } from "./functions";
import { Login } from "../components/Login";
import { RootLayout } from "../pages/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: getIsAuthenticated() ? <RootLayout /> : <Login />,
    children: [
      {
        index: true,
        element: <div>PicklePickle!!</div>,
      },
    ],
  },
]);
