import { useState } from "react";
import { TaskUi } from "../../ui";
export function SideBar() {
    const [tasks, setTasks] = useState([]);
    return (
        <div className="w-full h-full bg-background-secondary border-r-2 border-border-secondary gap-2 flex flex-col pt-3">
        </div>
    );
};