import { useState } from "react";
import { IconEdit } from "./elements/Icons";
import { Dialog } from "./elements/Dialog";
import { NavLink } from "react-router-dom";
const basename = import.meta.env.VITE_BASENAME || "/";

export const GalleryGridCard = ({ item, active }) => {
  return (
    <>
      <div className={!active ? "sr-only" : null}>
        <div className="aspect-5/4 bg-gray-800 p-1 relative">
          <img src={item.files.lg.url} className="w-full h-full object-contain" />
          {!!item.sold && <div className="bg-cordovan rounded-full w-7 h-7 text-white text-xxs uppercase flex items-center justify-center -rotate-45 absolute bottom-2 right-2 shadow-sold">Sold</div>}
        </div>
        <div className="flex justify-between items-center">
          <div className="p-1">
            <h3>{item.title}</h3>
          </div>
          <NavLink to={`/artwork/${item.slug}`} className="cursor-pointer text-cordovan hover:text-black">
            <IconEdit className="w-3 h-3 fill-current" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
