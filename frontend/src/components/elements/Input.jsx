export const Input = ({ label, type, name = "", className = "", ...props }) => {
  const Tag = type !== "textarea" ? "input" : "textarea";
  return (
    <>
      <label>
        <span className="block text-sm mb-2">{label}</span>
        <Tag type={type} id={name} name={name} rows={type === "textarea" ? 5 : null} className={`border font-sans w-full p-1 ${className}`} {...props} />
      </label>
    </>
  );
};
