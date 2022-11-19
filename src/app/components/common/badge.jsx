/* eslint-disable react/prop-types */
const Badge = ({ bgColor, textColor = "white", label }) => {
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

export default Badge;
