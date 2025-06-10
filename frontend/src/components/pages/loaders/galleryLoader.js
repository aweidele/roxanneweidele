import { sortGallery, apiRequest } from "@shared";

export const galleryLoader = async () => {
  const galleryData = await apiRequest("published");
  return sortGallery(galleryData);
};
