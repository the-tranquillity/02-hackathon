/* eslint-disable  */
import { Link } from "react-router-dom";
import Button from "../common/button";
import declOfNum from "app/utils/age";

const HomeMateCard = ({ mate, side }) => {
    const { _id: id, name, age, image, teaser } = mate;
    const imgFallback = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500";
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
export default HomeMateCard;
