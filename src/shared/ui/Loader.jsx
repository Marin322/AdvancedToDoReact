import style from '../Loader.module.css';
export const Loader = () => {
  return (
    <div className="w-screen h-screen flex relative z-100 bg-black opacity-50 items-center justify-center">
      <div className={style.loader}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
      </div>
    </div>
  );
};
