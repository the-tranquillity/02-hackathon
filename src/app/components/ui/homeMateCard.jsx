/* eslint-disable  */
import { updateMate } from "app/store/mates";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../common/button";
import declOfNum from "app/utils/age";

const HomeMateCard = ({ mate, side }) => {
    const dispatch = useDispatch();
    const { _id: id, name, age, image, isFavourite, teaser } = mate;
    const imgFallback = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500";

    const handleFav = () => {
        dispatch(updateMate({ ...mate, isFavourite: !isFavourite }));
    };
    return (
        mate && (
            <div className="hero my-44">
                <div
                    className={
                        "hero-content flex-col " + (side ? "lg:flex-row" : "lg:flex-row-reverse")
                    }
                >
                    <Link to={`/user/${id}`}>
                        <img
                            src={image ? require(`/src/${image}`) : imgFallback}
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt={name || ""}
                        />
                    </Link>

                    <div className={"mx-8 cst-text-" + (side ? "start" : "end")}>
                        <h2
                            className={
                                "text-5xl font-bold text-white cst-text-" + (side ? "start" : "end")
                            }
                        >
                            <Link
                                className={
                                    "text-body text-decoration-none cst-badge-" +
                                    (side ? "start" : "end")
                                }
                                to={`/user/${id}`}
                            >
                                {name || ""}{" "}
                                <span className="ms-2 badge bg-dark">
                                    {age} {age ? declOfNum(age, [" год", " года", " лет"]) : ""}
                                </span>
                            </Link>
                        </h2>
                        <p className={"py-6 text-[#e5e5e5] cst-text-" + (side ? "start" : "end")}>
                            {teaser || ""}
                        </p>
                        <Button className="btn bg-[#0D0D0D]" to={`/user/${id}`} routerLink={true}>
                            Посмотреть
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
};
// side ? "lg:flex-row" : "lg:flex-row-reverse"
export default HomeMateCard;

/* 

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
*/
