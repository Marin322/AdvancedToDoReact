import { Header } from "../components/layout/Header";
import { SideBar } from "../components/layout/SideBar/SideBar";
export function MainPage() {
    return (
        <div className="m-0 p-0 w-full h-full">
            <Header/>
            <div className="grid grid-cols-[20%_80%] w-screen h-229.5">
                <SideBar/>
            </div>
        </div>
    );
};