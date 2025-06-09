import { Colors } from "../tmp/Colors";
import { Header } from "./index";

export const Template = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <Colors />
      </footer>
    </>
  );
};
