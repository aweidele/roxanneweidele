import { RouterProvider } from "react-router-dom";
import { router } from "./functions/router";
import { AppProvider } from "./components/AppContext";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
