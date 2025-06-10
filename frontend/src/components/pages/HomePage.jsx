import { useEffect, useState } from "react";
import { Heading } from "../elements/Heading";
import { Gallery } from "../gallery/Gallery";
import { Container } from "../layout";
import { Section } from "../layout/Section";
import { Await, NavLink, useLoaderData } from "react-router-dom";
import { Filter } from "../gallery/Filter";
import bg from "/hp-bg.jpg";

export const HomePage = () => {
  const { gallery } = useLoaderData();
  const [filter, setFilter] = useState("all");
  const [filteredGallery, setFilteredGallery] = useState(gallery);

  useEffect(() => {
    if (filter !== "all") {
      setFilteredGallery(gallery.filter((item) => item.medium === filter));
    } else {
      setFilteredGallery(gallery);
    }
  }, [filter]);

  const handleFilter = (term) => {
    console.log("?");
    setFilter(term);
  };

  return (
    <>
      <header className="bg-white text-white pt-28 pb-20 md:pt-47.5 md:pb-35 sticky top-0 w-full z-0 bg-cover bg-center before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:backdrop-saturate-75 before:bg-overlay-40 before:z-0" style={{ backgroundImage: `url("${bg}")` }}>
        <Container w="narrow" className="relative z-10">
          <p className="text-center text-2xl-sm md:text-2xl-md lg:text-2xl font-heading font-light">Roxanne is a lifelong artist and art educator whose expressive landscapes in chalk pastels and oils capture emotional responses to nature. She lives in Maryland and is active in local artist communities and galleries.</p>
        </Container>
      </header>
      <Section background="chinaRose80" className="py-10 px-5 relative z-10 backdrop-blur-xs">
        <Heading className="text-center">My Work</Heading>
        <div>
          <Filter active={filter} onFilter={handleFilter} />
        </div>
      </Section>
      <Section background="white" className="relative z-10">
        <Gallery gallery={filteredGallery} />
      </Section>
    </>
  );
};
