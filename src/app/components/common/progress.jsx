/* eslint-disable react/prop-types */
const ProgressBar = ({ progressData }) => {
    const { name, progress, color = "primary" } = progressData;
    const styleHeight = {
        height: "25px"
    };

    const styleProgress = {
        width: progress + "%"
    };

    return (
        <div className="progress mb-3" style={styleHeight}>
            <div
                className={`progress-bar bg-${color}`}
                role="progressbar"
                aria-valuenow={progress}
                style={styleProgress}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {name}
            </div>
        </div>
    );
};

export default ProgressBar;
