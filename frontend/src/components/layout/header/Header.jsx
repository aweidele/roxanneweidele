import { Container, Logo } from "../index";
import { NavLink } from "react-router-dom";
import { Social } from "./Social";
import { useEffect, useRef, useState } from "react";
import { Nav } from "./Nav";

export const Header = ({ hasSlug = false, ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headingMT, setHeadingMT] = useState(0);

  const navLines = "block h-0.5 bg-white absolute left-0 top-[calc(50%-0.25rem)] transition-all duration-500";
  const line1Class = `${navLines} ${menuOpen ? "w-4/5 rotate-45" : "w-full -translate-y-1.25"}`;
  const line2Class = `${navLines} ${menuOpen ? "w-4/5 -rotate-45" : "w-3/4 translate-y-1.25"}`;

  const headingRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const headingHeight = headingRef.current.offsetHeight;
      setHeadingMT(window.scrollY > 100 ? `-${headingHeight}px` : 0);
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
        {/* <h1 className="sr-only">Portfolio of Roxanne Weidele, Maryland-based artist specializing in calm, natural landscape paintings in bold, lush colors.</h1> */}
        <Container w="full" className={`py-4 transition-all duration-500`}>
          <div className="max-md:flex justify-between items-center gap-5 relative">
            <h1 className={`md:text-center transition-300 ${scrolled ? "md:opacity-0" : ""}`} ref={headingRef} style={{ marginTop: headingMT }}>
              <NavLink to="/" className="text-white hover:text-uranian-blue max-md:relative max-md:z-40 text-xl-sm md:text-2xl uppercase tracking-widest" onClick={() => setMenuOpen(false)}>
                Roxanne Weidele
              </NavLink>
            </h1>
            <button className="md:hidden relative z-40 text-white w-8 h-8" onClick={toggleMenuOpen}>
              <span className={line1Class}></span>
              <span className={line2Class}></span>
              <span className="sr-only">Menu</span>
            </button>
            <div className={`menu ${menuOpen ? "" : " max-md:translate-x-full"}`}>
              <Nav className={`max-md:grow-1 flex items-center justify-center md:py-2 md:px-6`} handleClose={() => setMenuOpen(false)} scrolled={scrolled} />
              <Social handleClose={() => setMenuOpen(false)} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
