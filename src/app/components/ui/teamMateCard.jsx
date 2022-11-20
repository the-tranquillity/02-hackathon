import PropTypes from "prop-types";
import { updateMate } from "app/store/mates";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../common/button";
import declOfNum from "app/utils/age";
import { toast } from "react-toastify";

const TeamMateCard = ({ mate }) => {
    const dispatch = useDispatch();
    const { _id: id, name, age, image, isFavourite, teaser } = mate;
    const imgFallback = "https://via.placeholder.com/500";

    const handleFav = () => {
        const curStatus = !isFavourite;
        dispatch(updateMate({ ...mate, isFavourite: !isFavourite }));
        curStatus ? toast.success(`${mate.name} добавлен`) : toast.info(`${mate.name} удалён`);
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
                                    <span className="fw-normal fs-6 ms-1">
                                        {age ? declOfNum(age, [" год", " года", " лет"]) : ""}
                                    </span>
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
TeamMateCard.propTypes = {
    mate: PropTypes.object
};

export default TeamMateCard;
