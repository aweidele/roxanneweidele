import { Outlet } from "react-router-dom";
import { Template } from "../components/layout/Template";

export const RootLayout = () => {
  return (
    <Template>
      <Outlet />
    </Template>
  );
};
