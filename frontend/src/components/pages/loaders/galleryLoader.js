import { sortGallery, apiRequest } from "@shared";

export const galleryLoader = async () => {
  const galleryData = await apiRequest("?published=1");
  return sortGallery(galleryData);
};
