import { useState } from "react";
import { Label } from "./Label";

export const Toggle = ({ label, name, outerClass, innerClass, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = () => {
    setIsChecked((prev) => setIsChecked(!prev));
  };

  return (
    <label className={["block", outerClass].join(" ")}>
      <Label>{label}</Label>
      <input type="checkbox" checked={checked} onChange={handleCheck} className="sr-only" />
      <div className={`border w-7 h-4 rounded-full relative transition-all duration-200 ${isChecked ? "border-china-rose bg-china-rose" : "border-slate-400"}`}>
        <span className={`h-3 w-3 rounded-full block absolute top-px transition-all duration-200 ${isChecked ? "left-toggle-on bg-white" : "left-px bg-uranian-blue-800"}`}></span>
      </div>
    </label>
  );
};
