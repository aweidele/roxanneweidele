import { ContactForm } from "../ContactForm";
import { Heading } from "../elements/Heading";
import { Hero } from "../elements/Hero";
import { Container } from "../layout";
import { Section } from "../layout/Section";
import { P } from "../elements/Paragraphs";

export const Contact = () => {
  return (
    <>
      <Hero>
        <Heading>Contact Me</Heading>
      </Hero>
      <Section className="py-10">
        <Container w="xnarrow">
          <P>I’d love to hear from you! Send a message through the form below, or connect with me on Facebook.</P>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
};
