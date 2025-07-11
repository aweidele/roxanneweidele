import { buttonClasses } from "../functions/vars";

export const Button = ({ tag = "button", className, color, children, ...props }) => {
  const colorClass = color ? color : "bg-china-rose hover:bg-rose-quartz text-white";
  return (
    <button className={[...buttonClasses, "shadow shadow-slate-300", colorClass, className].join(" ")} {...props}>
      {children}
    </button>
  );
};
