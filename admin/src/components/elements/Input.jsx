import { Label } from "./Label";

export const Input = ({ label, name, type, required, outerClass, innerClass }) => {
  const Tag = type === "textarea" ? "textarea" : "input";
  return (
    <>
      <label className={["block", outerClass].join(" ")}>
        <Label>{label}</Label>
        <Tag type={type} className={`block border border-china-rose text-sm px-2 py-1 w-full ${innerClass}`} name={name} placeholder={label} required={required}></Tag>
      </label>
    </>
  );
};
