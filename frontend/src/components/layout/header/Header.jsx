import { Container, Logo } from "../index";
import { NavLink } from "react-router-dom";
import { Social } from "./Social";
import { useEffect, useState } from "react";
import { Nav } from "./Nav";

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
        <h1 className="sr-only">Portfolio of Roxanne Weidele, Maryland-based artist specializing in calm, natural landscape paintings in bold, lush colors.</h1>
        <Container w={scrolled ? "full" : "wide"} className={`py-4${scrolled ? "" : " md:py-11"} transition-all duration-500`}>
          <div className="flex justify-between items-center gap-5">
            <NavLink to="/" className="text-uranian-blue hover:text-white">
              <Logo className="w-28 lg:w-56.25 fill-current" />
              <span className="sr-only">Home</span>
            </NavLink>
            <Nav />
            <Social />
          </div>
        </Container>
      </header>
    </>
  );
};
