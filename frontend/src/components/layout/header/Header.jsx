import { Container, Logo } from "../index";
import { NavLink } from "react-router-dom";
import { Social } from "./Social";
import { useEffect, useState } from "react";
import { Nav } from "./Nav";

export const Header = ({ hasSlug = false, ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLines = "block h-0.5 bg-white absolute left-0 top-[calc(50%-0.25rem)] transition-all duration-500";
  const line1Class = `${navLines} ${menuOpen ? "w-4/5 rotate-45" : "w-full -translate-y-1.25"}`;
  const line2Class = `${navLines} ${menuOpen ? "w-4/5 -rotate-45" : "w-3/4 translate-y-1.25"}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header {...props}>
        <h1 className="sr-only">Portfolio of Roxanne Weidele, Maryland-based artist specializing in calm, natural landscape paintings in bold, lush colors.</h1>
        <Container w="full" className={`py-4 transition-all duration-500`}>
          <div className="flex justify-between items-center gap-5 md:grid md:grid-cols-(--cols-header)">
            <h1>
              <NavLink to="/" className="text-white hover:text-uranian-blue max-md:relative max-md:z-40 text-xl-sm xl:text-xl 2xl:text-2xl uppercase tracking-widest" onClick={() => setMenuOpen(false)}>
                Roxanne Weidele
              </NavLink>
            </h1>
            <button className="md:hidden relative z-40 text-white w-8 h-8" onClick={toggleMenuOpen}>
              <span className={line1Class}></span>
              <span className={line2Class}></span>
              <span className="sr-only">Menu</span>
            </button>
            <div className={`menu ${menuOpen ? "" : " max-md:translate-x-full"}`}>
              <Nav className={`max-md:grow-1 max-md:flex max-md:items-center md:py-4 md:px-6 transition-all duration-500${scrolled ? " md:bg-uranian-blue-900-80 md:rounded-2xl" : ""}`} handleClose={() => setMenuOpen(false)} />
              <Social handleClose={() => setMenuOpen(false)} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
