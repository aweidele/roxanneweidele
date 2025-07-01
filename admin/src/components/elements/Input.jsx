import { Label } from "./Label";

export const Input = ({ label, name, type, outerClass = "", innerClass = "", ...props }) => {
  const Tag = type === "textarea" ? "textarea" : "input";
  return (
    <>
      <label className={["block mb-1", outerClass].join(" ")}>
        <Label>{label}</Label>
        <Tag type={type} className={`block border border-china-rose text-sm px-2 py-1 w-full ${innerClass}`} id={name} name={name} placeholder={label} {...props}></Tag>
      </label>
    </>
  );
};
