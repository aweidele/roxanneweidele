import { Colors } from "../tmp/Colors";
import { Footer } from "./footer/Footer";
import { Header } from "./index";

export const Template = ({ hasSlug = false, children }) => {
  return (
    <>
      <Header className="w-full fixed top-0 left-0 z-50" hasSlug={hasSlug} />
      <main>{children}</main>
      <Footer />
      <Colors />
    </>
  );
};
