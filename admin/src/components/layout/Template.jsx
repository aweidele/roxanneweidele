import { useState } from "react";
import { useAppContext } from "../AppContext";

const bg = ["bg-sage", "bg-rose-quartz", "bg-china-rose", "bg-cordovan", "bg-uranian-blue", "bg-uranian-blue-800"];

export const Template = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  const [hoveredSquare, setHoveredSquare] = useState(0);

  const squareClick = (bgclass) => {
    navigator.clipboard
      .writeText(bgclass.replace(/^bg-/, ""))
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <header className="sticky top-0 w-full text-center p-5 h-18 bg-white">
        <h1>Roxanne Weidele</h1>
        <div className="absolute top-2.5 right-2.5">
          {bg.map((bgclass, index) => (
            <div key={bgclass} className={`w-4 h-4 m-1 inline-block relative ${bgclass}`} onMouseEnter={() => setHoveredSquare(index)} onMouseLeave={() => setHoveredSquare(null)} onClick={() => squareClick(bgclass)}>
              {hoveredSquare === index && <span className="absolute top-full text-xs left-1/2 -translate-x-1/2 w-50">{bgclass}</span>}
            </div>
          ))}
          {/* <div className="w-4 h-4 m-1 inline-block bg-rose-quartz"></div>
          <div className="w-4 h-4 m-1 inline-block bg-china-rose"></div>
          <div className="w-4 h-4 m-1 inline-block bg-cordovan"></div>
          <div className="w-4 h-4 m-1 inline-block bg-uranian-blue"></div>
          <div className="w-4 h-4 m-1 inline-block bg-uranian-blue-800"></div> */}
        </div>
      </header>
      <div className="flex w-full">
        {/* {isAuthenticated && (
          <nav>
            <ul>
              <li>Artwork</li>
              <li>Pages</li>
            </ul>
          </nav>
        )} */}
        <main className="grow">{children}</main>
      </div>
    </>
  );
};

/* 
  --color-sage: oklch(0.75 0.0648 120.79);
  --color-rose-quartz: oklch(0.69 0.0508 332.81);
  --color-china-rose: oklch(0.56 0.0968 351.88);
  --color-cordovan: oklch(0.5 0.1056 10.44);
  --color-uranian-blue: oklch(0.9 0.0579 232.56);

  --color-uranian-blue-800: oklch(0.8 0.0579 232.56);
  */
