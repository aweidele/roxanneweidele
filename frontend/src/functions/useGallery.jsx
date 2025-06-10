import { useState, useEffect } from "react";

export const useGallery = (gallery) => {
  const [filter, setFilter] = useState("all");
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
