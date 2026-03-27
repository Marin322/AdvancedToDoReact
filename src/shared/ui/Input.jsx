export const Input = ({
  label,
  error,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-[18px] font-medium text-text-main ml-1">
          {label}
        </label>
      )}
      <input type={type} {...props}
        className={`bg-input-main-bg outline-none px-4 py-3 border-2 border-border-secondary w-full font-medium transition-all rounded-md ${
          error ? "border-red-500" : ""
        }`}
      />
      {error ?? (
        <span className="text-red-500 text-xs font-medium animate-in fade-in slide-in-from-top-1 ml-1">{error}</span>
      )}
    </div>
  );
};
