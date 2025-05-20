import { forwardRef } from "react";
import { createPortal } from "react-dom";

export const Dialog = forwardRef(({ children, handleCloseButton, extraClasses, ...props }, ref) => {
  return createPortal(
    <dialog ref={ref} className={`w-screen h-screen top-0 left-0 bg-popup backdrop-blur-xs transition-all duration-300${extraClasses ? ` ${extraClasses}` : ""}`} {...props}>
      <div className="w-full h-full flex justify-center items-center p-10">
        <div className="bg-white max-h-full overflow-auto">
          <div className="sticky top-0 bg-white text-right">
            <button className="py-2 px-4" onClick={handleCloseButton}>
              Close
            </button>
          </div>
          {children}
        </div>
      </div>
    </dialog>,
    document.getElementById("dialog")
  );
});
