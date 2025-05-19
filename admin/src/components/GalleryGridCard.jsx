import { useState } from "react";
import { createPortal } from "react-dom";
import { IconEdit } from "./elements/Icons";
import { Dialog } from "./elements/Dialog";

export const GalleryGridCard = ({ item, active }) => {
  console.log("Item", item);
  const [editOpen, setEditOpen] = useState(false);
  return (
    <>
      <div className={!active ? "sr-only" : null}>
        <div className="aspect-5/4 bg-gray-800 p-1">
          <img src={item.files.lg.url} className="w-full h-full object-contain" />
        </div>
        <div className="flex justify-between items-center">
          <div className="p-1">
            <h3>{item.title}</h3>
          </div>
          <button className="cursor-pointer text-cordovan hover:text-black" onClick={() => setEditOpen(true)}>
            <IconEdit className="w-3 h-3 fill-current" />
          </button>
        </div>
      </div>
      {editOpen && createPortal(<Dialog />, document.getElementById("dialog"))}
    </>
  );
};
