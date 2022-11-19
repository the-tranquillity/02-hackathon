import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Button = ({
    children,
    routerLink,
    rounded,
    bgColor,
    textColor = "white",
    label,
    to,
    action,
    noBorder,
    handler
}) => {
    if (routerLink) {
        return (
            <Link
                type="button"
                className={
                    (rounded ? "rounded-pill" : "") +
                    " btn " +
                    (bgColor ? "bg-" + bgColor : "") +
                    " " +
                    (textColor ? "text-" + textColor : "") +
                    " " +
                    (noBorder ? "border-0" : "")
                }
                to={to}
            >
                {label || children}
            </Link>
        );
    }
    return (
        <button
            className={
                (rounded ? "rounded-pill" : "") +
                " btn " +
                (bgColor ? "bg-" + bgColor : "") +
                " " +
                (textColor ? "text-" + textColor : "") +
                " " +
                (noBorder ? "border-0" : "")
            }
            onClick={handler ? action : undefined}
        >
            {label || children}
        </button>
    );
};

export default Button;
