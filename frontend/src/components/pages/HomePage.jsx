import { Heading } from "../elements/Heading";
import { Container } from "../layout";
import { Section } from "../layout/Section";

export const HomePage = () => {
  return (
    <>
      <header className="bg-uranian-blue pt-45.5 py-37">
        <Container w="narrow">
          <p className="text-center text-2xl font-heading font-light">Roxanne is a lifelong artist and art educator whose expressive landscapes in chalk pastels and oils capture emotional responses to nature. She lives in Maryland and is active in local artist communities and galleries.</p>
        </Container>
      </header>
      <Section tag="section" background="chinaRose" className="py-10">
        <Heading className="text-center">My Work</Heading>
      </Section>
    </>
  );
};
