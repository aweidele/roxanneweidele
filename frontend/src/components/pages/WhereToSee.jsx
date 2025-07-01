import { Paragraphs } from "../elements";
import { Heading } from "../elements/Heading";
import { Hero } from "../elements/Hero";
import { P } from "../elements/Paragraphs";
import { Container } from "../layout";
import { Section } from "../layout/Section";

export const WhereToSee = () => {
  return (
    <>
      <Hero>
        <Heading>Currently on View</Heading>
      </Hero>
      <Section className="py-20">
        <Container w="xnarrow">
          <p className="text-lg">Want to see my work in person? Here’s where you’ll find my art on display. Check back now and then for new shows and events.</p>
        </Container>
        <Container w="narrow">
          <div className="md:flex gap-5">
            <div className="flex-1 my-10">
              <Heading l={3}>River Gallery</Heading>
              <P>
                100 Main Street
                <br />
                Galesville, Maryland 20765
              </P>
              <p className="flex gap-3 flex-wrap leading-3">
                <a href="https://maps.app.goo.gl/v8AMKY82QXv4RBxY6" target="_blank">
                  View on Google Maps
                </a>
                <a href="tel:4107034488">410-703-4488</a>
                <a href="mailto:rivergallery3@aol.com">rivergallery3@aol.com</a>
              </p>
            </div>
            <div className="flex-1 my-10">
              <Heading l={3}>Muddy Creek Artist Guild</Heading>
              <P>
                To check for present shows, please visit{" "}
                <a href="https://www.muddycreekartistsguild.org/" target="_blank">
                  muddycreekartistsguild.org/
                </a>
              </P>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
