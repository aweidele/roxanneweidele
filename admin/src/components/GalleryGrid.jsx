import { useState } from "react";
import { Button } from "@shared";
import { GalleryGridCard } from "./GalleryGridCard";
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, DragOverlay } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const medium = [
  { name: "All", id: "all" },
  { name: "Pastels", id: "pastels" },
  { name: "Oils", id: "oils" },
];

export const GalleryGrid = ({ content }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over?.id === "dropzone") {
      setTiles((prev) => prev.map((tile) => (tile.id === active.id ? { ...tile, published: false } : tile)));
    } else if (over && active.id !== over.id) {
      const oldIndex = tiles.findIndex((tile) => tile.id === active.id);
      const newIndex = tiles.findIndex((tile) => tile.id === over.id);
      setTiles(arrayMove(tiles, oldIndex, newIndex));
    }

    setActiveId(null);
  };

  return (
    <>
      <div className="inline-grid grid-cols-4 gap-1 mb-4 items-center">
        <h3>Filter: </h3>
        {medium.map((item) => (
          <Button key={item.id} color={activeFilter === item.id ? "bg-uranian-blue-800 hover:bg-uranian-blue text-black" : false} onClick={() => setActiveFilter(item.id)}>
            {item.name}
          </Button>
        ))}
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        // onDragStart={(e) => setActiveId(e.active.id)}
        // onDragEnd={handleDragEnd}
        // onDragCancel={() => setActiveId(null)}
      >
        <SortableContext items={tiles.filter((tile) => tile.published)} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-4 gap-x-2 gap-y-5">
            {content.map((item, index) => (
              <GalleryGridCard key={`gallery-item-${index}`} item={item} active={item.medium === activeFilter || activeFilter === "all"} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
};
