import { useState } from "react"
import { TaskSideBarItem } from "../../../entities/task-sidebar-item"
import { SideBarItem } from "../../../shared"
export const TasksSideBar = ({title, activeTab, activePage}) => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName)
    }
    return (
        <aside className="fixed w-full h-screen bg-secondary-bg md:border-r-2 md:border-border-secondary md:max-w-100 flex flex-col gap-4 p-3">
            <h1 className="text-2xl text-center mb-4">{title}</h1>
            <TaskSideBarItem label="Задача 1" isOpen={openMenu === "task1"} onToggle={() => toggleMenu("task1")}>
                <SideBarItem name="Да 1" className="border-none text-[20px]"/>
                <SideBarItem name="Да 2" className="border-none text-[20px]"/>
            </TaskSideBarItem>
            <TaskSideBarItem label="Задача 2" onToggle={true}/>
        </aside>
    )
}