import { Heading } from "../elements/Heading";
import { Gallery } from "../Gallery";
import { Container } from "../layout";
import { Section } from "../layout/Section";
import { Await, NavLink, useLoaderData } from "react-router-dom";

export const HomePage = () => {
  const { gallery } = useLoaderData();
  return (
    <>
      <header className="bg-uranian-blue pt-45.5 py-37">
        <Container w="narrow">
          <p className="text-center text-2xl font-heading font-light">Roxanne is a lifelong artist and art educator whose expressive landscapes in chalk pastels and oils capture emotional responses to nature. She lives in Maryland and is active in local artist communities and galleries.</p>
        </Container>
      </header>
      <Section background="chinaRose" className="py-10">
        <Heading className="text-center">My Work</Heading>
      </Section>
      <Section>
        <Gallery gallery={gallery} />
      </Section>
    </>
  );
};
