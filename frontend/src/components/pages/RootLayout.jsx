import { Outlet } from "react-router-dom";
import { Template } from "../layout";
export const RootLayout = () => {
  return (
    <Template>
      <Outlet />
    </Template>
  );
};
