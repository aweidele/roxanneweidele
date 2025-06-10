import { createBrowserRouter } from "react-router-dom";
import { RootLayout, HomePage, galleryLoader, Error, About, WhereToSee, Contact, Artwork, Single } from "../components/pages";
const basename = import.meta.env.VITE_BASENAME || "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: galleryLoader,
        },
        {
          path: "artwork",
          element: <Artwork />,
          loader: galleryLoader,
        },

        {
          path: "artwork/:slug",
          element: <Single />,
          loader: galleryLoader,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "where-to-see",
          element: <WhereToSee />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  { basename }
);
