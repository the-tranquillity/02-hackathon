// eslint-disable
import PropTypes from "prop-types";
// import { twMerge } from "tailwind-merge";

const ProgressBar = ({ progressData }) => {
    const { name, progress: prog, color = "info", type = "circle", size = 10 } = progressData;
    switch (type) {
        case "bar": {
            return (
                <progress
                    className={"progress progress-" + color + " w-56"}
                    value={+prog}
                    max="100"
                ></progress>
            );
        }
        case "circle": {
            // const strokeWidth = width / 10;
            // const radius = width / 2 - strokeWidth;
            // const circleLength = 2 * 3.14 * radius;
            // const circleProgressLength = (circleLength * prog) / 100;
            // const st = `--value:70%;`;
            // style={{marginRight: spacing + 'em'}}
            const sstyle = {
                "--value": prog,
                "--size": size + "rem",
                "--thickness": 2 + "px",
                color
            };
            return (
                <div className={"radial-progress"} style={sstyle}>
                    <span className="text-white">{name}</span>
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

/*
<div className="d-inline-block me-4">
                    <h5 className={`text-center text-${color}`}>{name}</h5>
                    <div className="position-relative">
                        <span
                            className={`position-absolute top-50 start-50 fs-2 text-${color}`}
                            style={{ transform: "translate(-50%, -50%)" }}
                        >{`${prog}%`}</span>
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
*/
