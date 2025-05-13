import { createBrowserRouter } from "react-router-dom";
import { AuthGate } from "../components/AuthGate";
import { HomePage, galleryLoader } from "../pages/HomePage";

const basename = import.meta.env.VITE_BASENAME || "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AuthGate />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: galleryLoader,
        },
      ],
    },
  ],
  { basename }
);
