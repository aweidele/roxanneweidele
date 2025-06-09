import { createBrowserRouter } from "react-router-dom";
import { RootLayout, HomePage } from "../components/pages";
const basename = import.meta.env.VITE_BASENAME || "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <div>Error.</div>,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ],
  { basename }
);
