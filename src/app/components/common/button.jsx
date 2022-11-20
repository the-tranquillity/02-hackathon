import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
    children,
    routerLink,
    rounded,
    bgColor,
    textColor,
    label,
    to,
    action,
    noBorder,
    tsptHover,
    moreClasses,
    handler
}) => {
    const classes =
        (rounded ? "rounded-pill" : "") +
        "btn " +
        (tsptHover ? "hover:bg-transparent border-transparent hover:border-transparent" : "") +
        " " +
        (bgColor ? "bg-" + bgColor : "") +
        " " +
        (textColor ? "text-" + textColor : "") +
        " " +
        (noBorder ? "border-0" : "") +
        " " +
        (moreClasses || "");

    if (routerLink) {
        return (
            <Link type="button" className={classes} to={to}>
                {label || children}
            </Link>
        );
    }
    return (
        <button className={classes} onClick={handler ? action : undefined}>
            {label || children}
        </button>
    );
};

Button.defaultProps = {
    textColor: "white"
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    routerLink: PropTypes.bool,
    rounded: PropTypes.bool,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string,
    action: PropTypes.func,
    noBorder: PropTypes.bool,
    tsptHover: PropTypes.bool,
    moreClasses: PropTypes.string,
    handler: PropTypes.bool
};

export default Button;
