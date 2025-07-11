import { Heading } from "../elements/Heading";
import { Container } from "../layout";
import { Section } from "../layout/Section";
import { Button } from "@shared/components/Button";
import { buttonClasses } from "@shared/functions/vars";
import bg from "/materials.jpg";
import oils from "/oils.jpg";
import pastels from "/pastels.jpg";

import { ArtworkLink } from "../elements/ArtworkLink";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <header className="bg-white text-white pt-28 pb-20 md:pt-47.5 md:pb-35 sticky top-0 w-full z-0 bg-cover bg-center before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:backdrop-saturate-75 before:bg-overlay-40 before:z-0" style={{ backgroundImage: `url("${bg}")` }}>
        <Container w="narrow" className="relative z-10">
          <p className="text-center text-2xl-sm md:text-2xl-md lg:text-2xl font-heading font-light">Roxanne is a lifelong artist and art educator whose expressive landscapes in chalk pastels and oils capture emotional responses to nature. She lives in Maryland and is active in local artist communities and galleries.</p>
        </Container>
      </header>
      <Section background="chinaRose80" className="py-10 px-5 relative z-10 backdrop-blur-xs">
        <Heading className="text-center">My Work</Heading>
        <div className="py-10 sm:flex gap-5 max-w-4xl m-auto flex-wrap">
          <div className="flex-1">
            <ArtworkLink img={oils} label="Oils" link="/artwork" />
          </div>
          <div className="flex-1">
            <ArtworkLink img={pastels} label="Pastels" link="/artwork" />
          </div>
          <div className="basis-full flex justify-center">
            <NavLink to="/artwork" className={[...buttonClasses, "bg-sage hover:bg-sage-200 text-uranian-blue-1000 no-underline"].join(" ")}>
              All Artwork
            </NavLink>
          </div>
        </div>
      </Section>
    </>
  );
};
