import PropTypes from "prop-types";

const Badge = ({ bgColor, textColor, label }) => {
    return <span className={"font-medium badge badge-lg badge-" + bgColor}>{label}</span>;
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
