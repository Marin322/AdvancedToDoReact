import styles from './LevelProgressBar.module.css';
export function LevelProgressBar() {
  const maxExp = 100;
  const currentExp = 40;
  return (
    <div className="w-80 h-2.5 bg-background-levelbg rounded-4xl">
      <div
        className={styles["header-level-current"]}
        style={{ width: `${(currentExp / maxExp) * 100}%` }}
      ></div>
    </div>
  );
}
