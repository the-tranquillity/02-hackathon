import PropTypes from "prop-types";

const ProgressBar = ({ progressData }) => {
    const { name, progress, color, type = "circle", width = 150 } = progressData;
    switch (type) {
        case "bar": {
            return (
                <div className={`mb-5`} style={{ color: `${color}` }}>
                    <h5>{name}</h5>
                    <div className={`rounded-xl bg-gray-600`}>
                        <div
                            style={{
                                width: `${progress}%`,
                                backgroundColor: `${color}`
                            }}
                            className={`text-center text-white rounded-xl`}
                        >{`${progress}%`}</div>
                    </div>
                </div>
            );
        }
        case "circle": {
            const strokeWidth = width / 10;
            const radius = width / 2 - strokeWidth;
            const circleProgressLength = (2 * 3.14 * radius * progress) / 100;
            return (
                <div className="inline-block mr-4">
                    <h5 className={`text-center`} style={{ color: `${color}` }}>
                        {name}
                    </h5>
                    <div className="relative">
                        <span
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                            style={{ color: `${color}` }}
                        >{`${progress}%`}</span>
                        <svg
                            style={{ color: `${color}` }}
                            width={width}
                            height={width}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                className="-rotate-90 origin-center"
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
        width: PropTypes.number,
        size: PropTypes.number
    })
};

export default ProgressBar;
