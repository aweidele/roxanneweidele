import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ArtList, artLoader } from "./pages/ArtList";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import ArtRoot from "./pages/ArtRoot";
import ArtSingle from "./pages/ArtSingle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "art",
        element: <ArtRoot />,
        children: [
          { index: true, element: <ArtList />, loader: artLoader },
          { path: ":artId", element: <ArtSingle /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
