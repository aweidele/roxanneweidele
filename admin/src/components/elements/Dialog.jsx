import { createPortal } from "react-dom";

export const Dialog = ({ children }) => {
  return createPortal(
    <dialog open className="fixed top-0 left-0 w-screen h-screen z-50 bg-popup flex justify-center items-center backdrop-blur-xs p-10">
      <div className="bg-white max-h-full overflow-auto">
        <div className="sticky top-0 bg-white text-right">
          <button className="py-2 px-4">Close</button>
        </div>
        {children}
      </div>
    </dialog>,
    document.getElementById("dialog")
  );
};
