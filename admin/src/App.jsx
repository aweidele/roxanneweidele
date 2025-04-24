import { RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import { router } from "./functions/router";
import { Template } from "./components/layout/Template";
import { AppProvider } from "./components/AppContext";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
