import { ContactForm } from "../ContactForm";
import { Heading } from "../elements/Heading";
import { Hero } from "../elements/Hero";
import { Container } from "../layout";
import { Section } from "../layout/Section";

export const Contact = () => {
  return (
    <>
      <Hero>
        <Heading>Contact Me</Heading>
      </Hero>
      <Section className="py-10">
        <Container w="xnarrow">
          <ContactForm />
        </Container>
      </Section>
    </>
  );
};
