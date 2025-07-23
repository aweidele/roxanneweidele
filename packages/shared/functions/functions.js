import { apiURL } from "./vars";

export const isNumeric = (str) => /^\d+$/.test(str);

export const getIsAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const [, payloadBase64] = token.split(".");
    const payload = JSON.parse(atob(payloadBase64));

    const now = Math.floor(Date.now() / 1000);

    if (payload.exp <= now) {
      localStorage.removeItem("token");
      return false;
    }

    return payload.exp && payload.exp > now;
  } catch (e) {
    return false;
  }
};

export const uniqid = (prefix = "") => prefix + Date.now().toString(36) + Math.random().toString(36).substring(2, 8);

export const sortFiles = (media) =>
  media.reduce((acc, { size_key, ...rest }) => {
    acc[size_key] = rest;
    return acc;
  }, {});

export const sortGallery = (galleryData) => {
  const gallery = galleryData.artwork.map((item) => {
    const files = sortFiles(galleryData.media.filter((media) => media.id === item.media || media.media === item.media));
    return { ...item, files, new: false };
  });

  return {
    gallery,
  };
};

export const getTextColor = (backgroundColor, format = "class") => {
  // Extract RGB values
  const rgb = backgroundColor.match(/\w\w/g).map((hex) => parseInt(hex, 16));

  // Calculate luminance using W3C formula
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Return black for light backgrounds, white for dark backgrounds
  if (format === "class") return luminance > 0.5 ? "text-black" : "text-white";
  return luminance > 0.5 ? "#3f3f47" : "#FFFFFF";
};

export const stringToLines = (str) => {
  return str
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
};

// export const imageURL = (image) => `${apiURL}${image.upload_path_rel}${image.filename}`;
export const imageURL = (image) => `${apiURL}${image.upload_path_rel}${image.filename}`;

export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^a-z0-9\-]/g, "") // Remove all non-alphanumeric except -
    .replace(/\-+/g, "-"); // Collapse multiple - into single -
};
