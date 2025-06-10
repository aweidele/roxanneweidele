import { Hero } from "../elements/Hero";
import { Heading, Paragraphs, Quote } from "../elements";

import { Container } from "../layout";

export const About = () => {
  return (
    <>
      <Hero>
        <Heading>About Me</Heading>
      </Hero>
      <Container w="narrow" className="py-20">
        <Paragraphs
          content={`
            Born and raised in New York City, Roxanne now lives in Galesville, Maryland. She earned an Associate Degree in Fine Arts from the Silvermine College of Art in Connecticut in 1964, followed by a BA in Art Education from Hofstra University in New York in 1968. Her formal education continued with graduate-level courses at the Maryland Institute College of Art in Baltimore.
            Before retiring in June 1999, Roxanne spent 31 years as an art educator at Southern Senior High School in Anne Arundel County, Maryland. During that time, she helped establish River Gallery in Galesville, where she continues to be a part owner. Today, she is an active member of the Muddy Creek Artists Guild, Art Lab, and West River Artists.
          `}
        />
        <Heading l={3}>Artist Statement</Heading>
        <Quote>The environment can be breathtaking—calming, powerful, even unsettling. For me, landscapes evoke strong emotional responses. Rather than focusing on detailed realism, my goal with chalk pastels and oils is to express the feeling a scene inspires. Through my work, I hope viewers will connect with the emotion and sense of place that moved me to create it.</Quote>
      </Container>
    </>
  );
};
