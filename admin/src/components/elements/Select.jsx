import { Label } from "./Label";

export const Select = ({ label, name, children, outerClass = "", innerClass = "", ...props }) => {
  return (
    <label className={["block mb-1", outerClass].join(" ")}>
      <Label>{label}</Label>
      <select className={`block border border-china-rose text-sm px-2 py-1 w-full ${innerClass}`} id={name} name={name} {...props}>
        {children}
      </select>
    </label>
  );
};
