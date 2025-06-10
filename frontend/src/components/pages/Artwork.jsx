import { Heading } from "../elements/Heading";
import { Hero } from "../elements/Hero";
import { Filter } from "../gallery/Filter";
import { Gallery } from "../gallery/Gallery";
import { Section } from "../layout/Section";
import { useGallery } from "@functions";

import { Await, useLoaderData } from "react-router-dom";

export const Artwork = () => {
  const { gallery } = useLoaderData();
  const { filter, filteredGallery, handleFilter } = useGallery(gallery);

  return (
    <>
      <Hero>
        <Heading>My Work</Heading>
        <div>
          <Filter active={filter} onFilter={handleFilter} />
        </div>
      </Hero>
      <Section background="white" className="relative z-10">
        <Gallery gallery={filteredGallery} />
      </Section>
    </>
  );
};
