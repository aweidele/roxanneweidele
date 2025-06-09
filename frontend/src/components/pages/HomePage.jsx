import { useEffect, useState } from "react";
import { Heading } from "../elements/Heading";
import { Gallery } from "../gallery/Gallery";
import { Container } from "../layout";
import { Section } from "../layout/Section";
import { Await, NavLink, useLoaderData } from "react-router-dom";

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
  return (
    <>
      <header className="bg-uranian-blue pt-45.5 py-37">
        <Container w="narrow">
          <p className="text-center text-2xl-sm md:text-2xl-md lg:text-2xl font-heading font-light">Roxanne is a lifelong artist and art educator whose expressive landscapes in chalk pastels and oils capture emotional responses to nature. She lives in Maryland and is active in local artist communities and galleries.</p>
        </Container>
      </header>
      <Section background="chinaRose" className="py-10">
        <Heading className="text-center">My Work</Heading>
        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("pastels")}>Pastels</button>
          <button onClick={() => setFilter("oils")}>Oils</button>
          {filter}
        </div>
      </Section>
      <Section>
        <Gallery gallery={filteredGallery} />
      </Section>
    </>
  );
};
