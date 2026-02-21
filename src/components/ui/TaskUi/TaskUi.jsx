export function TaskUi({taskName}) {
    return (
        <div className="truncate border-2 border-border-secondary border-l-0 border-r-0 cursor-pointer w-full h-15 text-text-main text-[20px] p-2 flex items-center">
            {taskName}
        </div>
    );
};