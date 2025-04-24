import { createBrowserRouter } from "react-router-dom";
import { AuthGate } from "../components/AuthGate";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
