import { twMerge } from "tailwind-merge";
export const Button = ({className="", variant = "primary", children, ...props}) => {
    const baseStyles = "w-full px-4 py-3 rounded-xl cursor-pointer";

    const variants = {
        primary: "bg-button-main-bg text-text-secondary"
    }
    return (
        <button className={twMerge(baseStyles, variants[variant], className)} {...props}>
            {children}
        </button>
    );
};