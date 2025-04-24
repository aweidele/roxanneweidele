import { useContext } from "react";
import { AppContext } from "../AppContext";

export const Template = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <>
      <header className="sticky top-0 w-full text-center p-5 h-18 bg-white">
        <h1>Roxanne Weidele</h1>
        {isAuthenticated ? "nav will go here" : ""}
      </header>
      <main className="py-5">{children}</main>
    </>
  );
};
