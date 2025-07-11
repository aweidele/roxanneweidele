import { getTextColor } from "./functions";

export const border = ["border-sage", "border-rose-quartz", "border-china-rose", "border-cordovan", "border-uranian-blue"];
export const bg = { sage: "bg-sage", roseQuartz: "bg-rose-quartz", chinaRose: "bg-china-rose", cordovan: "bg-cordovan", uranianBlue: "bg-uranian-blue", white: "bg-white" };

export const themeColors = {
  sage: { bg: "bg-sage", border: "border-sage", text: getTextColor("#a9b687") },
  roseQuartz: { bg: "bg-rose-quartz", border: "border-rose-quartz", text: getTextColor("#af90a9") },
  chinaRose: { bg: "bg-china-rose", border: "border-china-rose", text: getTextColor("#a05c7c") },
  cordovan: { bg: "bg-cordovan", border: "border-cordovan", text: getTextColor("#974856") },
  uranianBlue: { bg: "bg-uranian-blue", border: "border-uranian-blue", text: getTextColor("#bce5fa") },
  white: { bg: "bg-white", border: "border-white", text: getTextColor("#99c5de") },
  chinaRose80: { bg: "bg-china-rose-80", border: "border-china-rose-80", text: getTextColor("#a05c7c") },
};

export const apiURL = import.meta.env.VITE_API_URL || "https://api.roxanneweidele.com/";

const headingClasses = ["text-5xl-sm md:text-5xl-md lg:text-5xl", "text-4xl-sm md:text-4xl-md lg:text-4xl uppercase", "text-2xl", "text-2xl", "text-xl", "text-lg"];
export const headingClass = (l, extraClasses) => ["font-heading font-light", headingClasses[l - 1], extraClasses].join(" ");

export const containerWidths = {
  full: "max-w-full",
  wide: "max-w-7xl",
  narrow: "max-w-4xl",
  xnarrow: "max-w-2xl",
};

export const buttonClasses = ["cursor-pointer uppercase font-heading tracking-wide py-2 px-6 rounded-lg transition-all duration-300"];
