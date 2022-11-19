/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MATES_STORAGE } from "../../constants/constants";
import { fromStorage } from "../../utils/fromStorage";
import { toStorage } from "../../utils/toStorage";
import Button from "../common/button";

const TeamMateCard = ({ mate, setTeamMates }) => {
    const { _id: id, name, age, image, isFavourite, teaser } = mate;
    const imgFallback = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500";

    const handleFav = () => {
        const currentMates = fromStorage(MATES_STORAGE);
        const restMates = currentMates.filter((m) => m._id !== id);
        const updatedMates = [{ ...mate, isFavourite: !isFavourite }, ...restMates];
        toStorage(MATES_STORAGE, updatedMates);
        setTeamMates(updatedMates);
    };
    return (
        mate && (
            <div className="col">
                <div className="card">
                    <Link className="text-body text-decoration-none" to={`/user/${id}`}>
                        <img
                            src={image ? require(`/src/${image}`) : imgFallback}
                            className="card-img-top"
                            alt={name || ""}
                        />
                    </Link>
                    <div className="card-body pb-0">
                        <h5 className="card-title">
                            <Link className="text-body text-decoration-none" to={`/user/${id}`}>
                                {name || ""}{" "}
                                <span className="ms-2 badge bg-dark">
                                    {age || ""}
                                    <span className="fw-normal fs-6 ms-1">лет</span>
                                </span>
                            </Link>
                        </h5>
                        <p className="card-text text-dark text-opacity-50">{teaser || ""}</p>
                    </div>
                    <div className="card-footer text-end mb-1 me-2 bg-white border-0 ">
                        <Button
                            className="me-4"
                            textColor="primary"
                            to={`/user/${id}`}
                            routerLink={true}
                        >
                            <i className="bi bi-box-arrow-up-right fs-5"></i>
                        </Button>
                        <Button
                            bgColor="transparent"
                            textColor="primary"
                            action={handleFav}
                            handler={true}
                        >
                            <i className={"bi fs-5 bi-star" + (isFavourite ? "-fill" : "")}></i>
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
};

export default TeamMateCard;
