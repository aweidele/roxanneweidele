export const Button = ({ tag = "button", className, children, ...props }) => {
  return (
    <button className={`cursor-pointer bg-china-rose hover:bg-rose-quartz text-white uppercase font-heading tracking-wide py-2 px-2 rounded-lg shadow shadow-slate-300 ${className}`} {...props}>
      {children}
    </button>
  );
};
