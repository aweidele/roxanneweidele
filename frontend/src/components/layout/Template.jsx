import { Colors } from "../tmp/Colors";
import { Header } from "./index";

export const Template = ({ children }) => {
  return (
    <>
      <Header className="w-full absolute top-0 left-0 z-50" />
      <main>{children}</main>
      <footer>
        <Colors />
      </footer>
    </>
  );
};
