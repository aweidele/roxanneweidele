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
};

export const apiURL = import.meta.env.VITE_API_URL || "https://api.roxanneweidele.com/";
export const containerWidths = {
  wide: "max-w-7xl",
  narrow: "max-w-4xl",
};
