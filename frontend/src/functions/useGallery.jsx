import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export const useGallery = (gallery) => {
  const { medium } = useParams();
  const [filter, setFilter] = useState(medium ? medium : "all");
  const [filteredGallery, setFilteredGallery] = useState(gallery || []);

  useEffect(() => {
    if (filter !== "all") {
      setFilteredGallery(gallery.filter((item) => item.medium === filter));
    } else {
      setFilteredGallery(gallery);
    }
  }, [filter, gallery]);

  const handleFilter = (term) => {
    setFilter(term);
  };

  return {
    filter,
    filteredGallery,
    handleFilter,
  };
};
