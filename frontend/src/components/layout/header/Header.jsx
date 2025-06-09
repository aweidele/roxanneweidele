import { Container, Logo } from "../index";
import { NavLink } from "react-router-dom";
import { Social } from "./Social";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <Logo className="w-56.25 fill-current" />
            <span className="sr-only">Home</span>
          </NavLink>
          <Social />
        </div>
      </Container>
    </header>
  );
};
