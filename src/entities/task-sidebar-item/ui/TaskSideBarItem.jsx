import { SideBarItem } from "../../../shared";
export const TaskSideBarItem = ({ label, onToggle, isOpen, children }) => {
  return (
    <div className="flex flex-col">
      <SideBarItem onClick={onToggle} name={label} isActive={false} isDropdown={true} isExpanded={isOpen}/>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2 mb-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-4 pr-1 py-1 flex flex-col gap-1 border-l-2 border-border-secondary ml-3 mt-2 mb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
