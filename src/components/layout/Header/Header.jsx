import { LevelProgressBar } from "../../ui/index.js";
export function Header() {
  return (
    <div className="w-full h-20 bg-background-secondary border-b-2 border-border-secondary grid grid-cols-[200px_auto_200px] items-center pl-4 pr-4">
      <p className="text-text-main text-2xl">AdvancedToDo</p>
      <div className="h-full grid grid-rows-[40%_60%] items-center justify-center">
        <p className="text-center text-text-main text-xl">15 уровень</p>
        <LevelProgressBar/>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-text-main text-lg">Петров Г.</p>
        <div className="w-15 h-15 bg-gray-500 rounded-[50%]">
          <img className="w-full h-full rounded-[50%]"></img>
        </div>
      </div>
    </div>
  );
}
