export const SideBarItem = ({
  name,
  isActive,
  onClick,
  isDropdown = false,
  isExpanded = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex justify-between border-2 border-border-secondary rounded-2xl p-5 text-text-main text-2xl items-center ${className}`}
    >
      <div>{name}</div>
      {isDropdown && (
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
};
