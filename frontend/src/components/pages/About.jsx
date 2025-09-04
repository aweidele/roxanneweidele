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
            Born and raised in New York City, Roxanne now lives in Galesville, Maryland. She earned an Associate Degree in Fine Arts from the Silvermine College of Art in Connecticut in 1964, followed by a BA in Art Education from Hofstra University in New York in 1968. She later pursued graduate-level courses at the Maryland Institute College of Art in Baltimore.
            Before retiring in June 1999, Roxanne spent 31 years as an art educator at Southern Senior High School in Anne Arundel County, Maryland. During that time, she helped establish River Gallery in Galesville, where she continues to exhibit her work. Today, she is an active member of the Muddy Creek Artists Guild, Art Lab, and West River Artists.
          `}
        />
        <Heading l={3}>Artist Statement</Heading>
        <Quote>The environment can shift from breathtaking beauty to quiet calm, from raw power to subtle threat.Landscapes, for me, are never just seen—they are felt. With chalk pastels and oils, I seek not to record every detail, but to capture the pulse, the mood, the memory of a place.Through my work, I invite viewers to step into that moment and feel the spark that first stirred me.</Quote>
      </Container>
    </>
  );
};
