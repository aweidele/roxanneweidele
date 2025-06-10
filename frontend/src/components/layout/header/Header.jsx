import { Container, Logo } from "../index";
import { NavLink } from "react-router-dom";
import { Social } from "./Social";
import { useEffect, useState } from "react";

export const Header = ({ ...props }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header {...props}>
        <Container w={scrolled ? "full" : "wide"} className={`py-4${scrolled ? "" : " md:py-11"} transition-all duration-500`}>
          <div className="flex justify-between items-center gap-5">
            <NavLink to="/" className="text-uranian-blue hover:text-white">
              <Logo className="w-28 lg:w-56.25 fill-current" />
              <span className="sr-only">Home</span>
            </NavLink>
            <Social />
          </div>
        </Container>
      </header>
    </>
  );
};
