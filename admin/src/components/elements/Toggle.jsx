import { useState } from "react";
import { Label } from "./Label";

export const Toggle = ({ label, name, outerClass = "", checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <label className={["block", outerClass].join(" ")}>
        <Label>{label}</Label>
        <input name={name} id={name} type="checkbox" onChange={handleCheck} className="sr-only" checked={isChecked} />
        <div className={`border w-7 h-4 rounded-full relative transition-all duration-200 ${isChecked ? "border-china-rose bg-china-rose" : "border-slate-400"}`}>
          <span className={`h-3 w-3 rounded-full block absolute top-px transition-all duration-200 ${isChecked ? "left-toggle-on bg-white" : "left-px bg-uranian-blue-800"}`}></span>
        </div>
      </label>
    </>
  );
};
