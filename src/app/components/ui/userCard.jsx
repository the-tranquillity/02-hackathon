import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    console.log(user);
    const imgFallback = "https://via.placeholder.com/150";
    return (
        user && (
            <div className="col">
                <div className="card">
                    <Link
                        className="text-body text-decoration-none"
                        to={`/user/${user._id}`}
                    >
                        <img
                            src={user.image || imgFallback}
                            className="card-img-top"
                            alt={user.name || ""}
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link
                                className="text-body text-decoration-none"
                                to={`/user/${user._id}`}
                            >
                                {user.name || ""}{" "}
                                <span class="ms-2 badge bg-dark">
                                    {user.age || ""}
                                    <span className="fw-normal fs-6 ms-1">
                                        лет
                                    </span>
                                </span>
                            </Link>
                        </h5>
                        <p className="card-text text-dark text-opacity-50">
                            {user.teaser || ""}
                        </p>
                    </div>
                    <div className="card-footer text-end mb-1 me-2 bg-white border-0 ">
                        links
                    </div>
                </div>
            </div>
        )
    );
};

export default UserCard;
