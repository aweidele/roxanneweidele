import { Section } from "./Section";
import { useGalleryContext } from "./GalleryContext";
import { useState } from "react";
import { IconUnpublished, IconPublished } from "./elements/Icons";
import { Button } from "@shared/components/Button";
import { GalleryGridCard } from "./GalleryGridCard";

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay, useDroppable } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useApi } from "@shared";
import { useAppContext } from "./AppContext";

export const Gallery = () => {
  const { gallery, reorderItems, togglePublished } = useGalleryContext();
  const [viewingPublished, setViewingPublished] = useState(true);
  const [activeId, setActiveId] = useState(null);

  const { data, loading, error, request } = useApi();
  const { token } = useAppContext();

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const published = gallery.filter((item) => item.published);
  const unpublished = gallery.filter((item) => !item.published);
  const currentItems = viewingPublished ? published : unpublished;

  const Icon = viewingPublished ? IconUnpublished : IconPublished;

  const handleToggleView = () => {
    setViewingPublished(!viewingPublished);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    if (over.id === "dropzone") {
      togglePublished(active.id);
      const item = gallery.find((item) => item.id === active.id);
      await request(`artwork/${active.id}/edit`, "PUT", { published: item.published ? 0 : 1 }, token);
    } else if (active.id !== over.id) {
      const all = [...published, ...unpublished];
      const oldIndex = all.findIndex((item) => item.id === active.id);
      const newIndex = all.findIndex((item) => item.id === over.id);
      const reordered = arrayMove(all, oldIndex, newIndex);
      reorderItems(reordered);

      const order = reordered.map((item, index) => ({
        id: item.id,
        art_order: index + 1,
      }));

      const result = await request(`artwork/reorder`, "PUT", { new_order: order }, token);
    }
  };

  return (
    <Section>
      <h2 className="mb-8">Gallery Grid</h2>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={(e) => setActiveId(e.active.id)} onDragEnd={handleDragEnd} onDragCancel={() => setActiveId(null)}>
        <div className="flex gap-15">
          <div className="flex-3/4">
            {/* SORTABLE GRID */}
            <SortableContext items={currentItems.map((item) => item.id)} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-4 gap-x-2 gap-y-5">
                {currentItems.map((item) => (
                  <SortableGalleryCard key={`item-${item.id}`} item={item} />
                ))}
              </div>
            </SortableContext>
            {/* END SORTABLE GRID */}
          </div>
          <div className="flex-1/4">
            <div className="sticky top-0">
              <h3 className="mb-4 leading-[2.5rem]">
                {viewingPublished ? "Unpublished" : "Published"} Items ({viewingPublished ? unpublished.length : published.length})
              </h3>
              {/* DROPZONE */}
              <Dropzone id="dropzone" viewingPublished={viewingPublished}>
                <Icon className={`${viewingPublished ? "fill-cordovan" : "fill-sage"} w-18 h-18 block mx-auto mt-6 transition-300`} />
                <p>
                  Drag images from the gallery to set to <strong>{viewingPublished ? "unpublished" : "published"}</strong>
                </p>
              </Dropzone>
              {/* END DROPZONE */}
              <div className="text-center py-5">
                <Button color={viewingPublished ? "bg-cordovan hover:bg-cordovan-800 text-white" : "bg-sage hover:bg-sage-200 text-uranian-blue-1000"} onClick={handleToggleView}>
                  Open {viewingPublished ? "Unpublished" : "Published"}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DragOverlay>
          {activeId ? (
            <div className="opacity-80 scale-80 rotate-10">
              <GalleryGridCard item={gallery.find((item) => item.id === activeId)} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </Section>
  );
};

const SortableGalleryCard = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <GalleryGridCard item={item} />
    </div>
  );
};

const Dropzone = ({ id, viewingPublished, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className={`aspect-5/4 border-2 border-dashed rounded-xl ${viewingPublished ? "border-cordovan" : "border-sage"} flex flex-col justify-center items-center text-center p-10 ${isOver ? "bg-gray-100" : ""}`}>
      {children}
    </div>
  );
};
