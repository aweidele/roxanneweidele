export const Button = ({ tag = "button", className, color, children, ...props }) => {
  const colorClass = color ? color : "bg-china-rose hover:bg-rose-quartz text-white";
  return (
    <button className={`cursor-pointer ${colorClass} uppercase font-heading tracking-wide py-2 px-2 rounded-lg shadow shadow-slate-300 transition-all duration-300 ${className}`} {...props}>
      {children}
    </button>
  );
};
