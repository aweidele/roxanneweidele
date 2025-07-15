import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export const useGallery = (gallery) => {
  const { medium } = useParams();
  const [filteredGallery, setFilteredGallery] = useState(gallery || []);

  useEffect(() => {
    console.log(medium);
    if (medium) {
      setFilteredGallery(gallery.filter((item) => item.medium === medium));
    } else {
      setFilteredGallery(gallery);
    }
  }, [gallery, medium]);

  return {
    filteredGallery,
  };
};
