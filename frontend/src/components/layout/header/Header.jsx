import { Container, Logo } from "../index";
import { NavLink } from "react-router-dom";
import { Social } from "./Social";

export const Header = ({ ...props }) => {
  return (
    <header {...props}>
      <Container className="py-11">
        <div className="flex justify-between items-center gap-5">
          <NavLink to="/">
            <Logo className="w-28 lg:w-56.25 fill-current" />
            <span className="sr-only">Home</span>
          </NavLink>
          <Social />
        </div>
      </Container>
    </header>
  );
};
