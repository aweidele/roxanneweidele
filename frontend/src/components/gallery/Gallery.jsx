import { RowsPhotoAlbum } from "react-photo-album";
import { NavLink } from "react-router-dom";
import "react-photo-album/rows.css";
import { useState } from "react";
import { GalleryItem } from "./GalleryItem";
import { imageURL } from "@shared";

export const Gallery = ({ gallery }) => {
  const [hover, setHover] = useState(null);
  const photos = gallery.map((item) => ({
    src: imageURL(item.files.lg),
    alt: item.title,
    width: item.files.lg.width,
    height: item.files.lg.height,
    item: { ...item },
  }));
  return (
    <div className="py-2.5">
      {hover}
      <RowsPhotoAlbum
        spacing={10}
        photos={photos}
        targetRowHeight={520}
        render={{
          extras: (_, { photo, index }) => <GalleryItem item={photo.item} index={index} />,
        }}
      />
    </div>
  );
};
