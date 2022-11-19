import PropTypes from "prop-types";

const ProgressBar = ({ progressData }) => {
    const { name, progress, color = "primary", type = "circle", width = 150 } = progressData;
    switch (type) {
        case "bar": {
            return (
                <div className={`text-${color} mb-3`}>
                    <h5>{name}</h5>
                    <div className={`bg-${color} bg-opacity-10 rounded-pill`}>
                        <div
                            style={{ width: `${progress}%` }}
                            className={`text-center text-white bg-${color} rounded-pill`}
                        >{`${progress}%`}</div>
                    </div>
                </div>
            );
        }
        case "circle": {
            const strokeWidth = width / 10;
            const radius = width / 2 - strokeWidth;
            const circleLength = 2 * 3.14 * radius;
            const circleProgressLength = (circleLength * progress) / 100;
            return (
                <div className="d-inline-block me-4">
                    <h5 className={`text-center text-${color}`}>{name}</h5>
                    <div className="position-relative">
                        <span
                            className={`position-absolute top-50 start-50 fs-2 text-${color}`}
                            style={{ transform: "translate(-50%, -50%)" }}
                        >{`${progress}%`}</span>
                        <svg
                            className={`text-${color}`}
                            width={width}
                            height={width}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                style={{
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "center"
                                }}
                                r={radius}
                                cx={width / 2}
                                cy={width / 2}
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth={strokeWidth}
                                strokeLinecap="round"
                                strokeDasharray={`${circleProgressLength} 10000`}
                            ></circle>
                            <circle
                                r={radius}
                                cx={width / 2}
                                cy={width / 2}
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth={strokeWidth}
                                strokeOpacity=".2"
                            ></circle>
                        </svg>
                    </div>
                </div>
            );
        }
        default:
            return null;
    }
};

ProgressBar.propTypes = {
    progressData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        color: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["circle", "bar"]),
        width: PropTypes.number
    })
};

export default ProgressBar;
