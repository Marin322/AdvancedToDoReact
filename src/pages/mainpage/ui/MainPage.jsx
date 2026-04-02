import { useState } from "react"
import { TasksSideBar } from "../../../widgets/tasks-sidebar"
export const MainPage = () => {
    const [activeTab, setActiveTab] = useState("");
    return (
        <div>
            <TasksSideBar title="Задачи"/>
        </div>
    )
}