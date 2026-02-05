import styles from "./Header.module.css";
export function Header() {
  const maxExp = 100;
  const currentExp = 40;
  return (
    <div className="w-full h-20 bg-background-secondary border-b-2 border-border-secondary grid grid-cols-[200px_auto_200px] items-center pl-4 pr-4">
      <p className="text-text-main text-2xl">AdvancedToDo</p>
      <div className="h-full grid grid-rows-[40%_60%] items-center justify-center">
        <p className="text-center text-text-main text-xl">15 уровень</p>
        <div className="w-80 h-2.5 bg-background-levelbg rounded-4xl">
          <div
            className={styles["header-level-current"]}
            style={{ width: `${(currentExp / maxExp) * 100}%` }}
          ></div>
        </div>
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
