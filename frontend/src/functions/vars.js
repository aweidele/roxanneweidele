export const apiURL = import.meta.env.VITE_API_URL || "https://api.roxanneweidele.com/";

const headingClasses = ["text-5xl", "text-4xl uppercase", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];

export const headingClass = (l, extraClasses) => ["font-heading font-light", headingClasses[l - 1], extraClasses].join(" ");
