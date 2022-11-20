import PropTypes from "prop-types";

const Badge = ({ bgColor, textColor = "white", label }) => {
    const style = {
        fontWeight: 500,
        backgroundColor: bgColor,
        color: textColor
    };
    return (
        <span className={"rounded py-0.5 px-4"} style={style}>
            {label}
        </span>
    );
};

Badge.defaultProps = {
    textColor: "white"
};

Badge.propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    label: PropTypes.string.isRequired
};

export default Badge;
