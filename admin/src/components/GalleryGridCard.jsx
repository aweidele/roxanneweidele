import { useState } from "react";
import { IconEdit } from "./elements/Icons";
import { Dialog } from "./elements/Dialog";
import { NavLink } from "react-router-dom";
import { imageURL } from "@shared";

const basename = import.meta.env.VITE_BASENAME || "/";

export const GalleryGridCard = ({ item, active }) => {
  return (
    <>
      <div className={!active ? "sr-only" : null}>
        <div className="aspect-5/4 bg-uranian-blue-1000 p-1 relative">
          <img src={imageURL(item.files.lg)} className="w-full h-full object-contain" />
          {!!item.sold && <div className="bg-cordovan rounded-full w-7 h-7 text-white text-xxs uppercase flex items-center justify-center -rotate-45 absolute bottom-2 right-2 shadow-sold">Sold</div>}
        </div>
        <div className="flex justify-between">
          <div className="p-1">
            <h3>{item.title}</h3>
          </div>
          <NavLink to={`/artwork/${item.slug}`} className="block cursor-pointer text-cordovan hover:text-black py-3">
            <IconEdit className="w-3 h-3 fill-current" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
