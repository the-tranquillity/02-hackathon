import PropTypes from "prop-types";

const Badge = ({ bgColor, textColor, label }) => {
    return (
        <div
            className={
                "w-auto px-3 py-1 me-2 text-white rounded bg-" + bgColor + " " + "text-" + textColor
            }
        >
            {label}
        </div>
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
