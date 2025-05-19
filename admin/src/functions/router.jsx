import { createBrowserRouter } from "react-router-dom";
import { AuthGate } from "../components/AuthGate";
import { HomePage, galleryLoader } from "../pages/HomePage";
import { ArtworkDialog } from "../components/ArtworkDialog";

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
          errorElement: <div>Error</div>,
          loader: galleryLoader,
        },
        {
          path: "artwork/:slug",
          element: (
            <>
              <HomePage />
              <ArtworkDialog />
            </>
          ),
          loader: galleryLoader,
        },
      ],
    },
  ],
  { basename }
);
