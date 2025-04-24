import { RouterProvider } from "react-router-dom";
import { router } from "./functions/router";
import { AppProvider } from "./components/AppContext";
const basename = import.meta.env.VITE_BASENAME || "/";

function App() {
  return (
    <>
      <h2>{basename}</h2>
      {/* <AppProvider>
        <RouterProvider router={router} />
      </AppProvider> */}
    </>
  );
}

export default App;
