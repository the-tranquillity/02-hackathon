import { SMEDIA } from "../constants/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMatesLoadingStatus, getMateById, updateMate, loadMates } from "../store/mates";
import badgesData from "../mockData/badges.json";
import skillsData from "../mockData/skills.json";
import Loader from "app/components/ui/loader";
import ProgressBar from "../components/common/progress";
import Button from "app/components/common/button";
import Badge from "app/components/common/badge";

const User = () => {
    const fallbackImg = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500";
    const { userId } = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(getMatesLoadingStatus());

    const mate = useSelector(getMateById(userId));
    const [mateBages, setMateBages] = useState([]);
    const [mateSocial, setMateSocial] = useState([]);
    const [mateSkills, setMateSkills] = useState([]);

    useEffect(() => {
        if (isLoading) {
            dispatch(loadMates());
        }
    }, [isLoading]);

    useEffect(() => {
        if (mate) {
            setMateBages(mate.badges.map((b) => getBadgeById(b)));
            const mappedSocial = mate.social.map((s, i) => {
                const sKey = Object.keys(s)[0];
                return {
                    link: s[sKey],
                    icon: SMEDIA[sKey].icoName,
                    color: SMEDIA[sKey].icoBg,
                    key: i
                };
            });
            setMateSocial(mappedSocial);
            const mappedSkills = mate.skills.map((skl) => {
                const sklData = getSkillById(skl.skillId);
                return {
                    ...sklData,
                    progress: skl.value
                };
            });
            setMateSkills(mappedSkills);
        }
    }, [mate]);

    const getBadgeById = (bageId) => badgesData.find((b) => +b._id === +bageId);
    const getSkillById = (skId) => skillsData.find((s) => +s._id === +skId);

    const handleFav = () => {
        dispatch(updateMate({ ...mate, isFavourite: !mate.isFavourite }));
    };

    return mate ? (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {/* <!-- Card--> */}
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={mate.image ? require(`/src/${mate.image}`) : fallbackImg}
                                    className="img-fluid rounded-start h-100"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{mate.name}</h5>
                                    <p className="card-text">
                                        <small className="text-muted">{mate.age} лет</small>
                                    </p>
                                    <p className="card-text">{mate.teaser}</p>
                                </div>
                                <div className="card-footer text-end mb-1 me-2 bg-white border-0 ">
                                    <Button
                                        bgColor="transparent"
                                        textColor="primary"
                                        action={handleFav}
                                        handler={true}
                                    >
                                        <i
                                            className={
                                                "bi fs-5 bi-star" +
                                                (mate.isFavourite ? "-fill" : "")
                                            }
                                        ></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            {/* <!-- Moreinfo--> */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h2 className="card-title h4">Роль в проекте</h2>
                                    <p className="card-text">{mate.about}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <!-- Role--> */}
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h2 className="card-title h4 mb-4">Навыки</h2>
                                    <div className="card-text">
                                        {mateSkills ? (
                                            mateSkills.map((s) => (
                                                <ProgressBar key={s._id} progressData={s} />
                                            ))
                                        ) : (
                                            <Loader />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button bgColor="primary" to="/" routerLink={true}>
                                <i className="bi bi-chevron-left me-2"></i> К списку участников
                                команды
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <!-- Side widgets--> */}
                <div className="col-lg-4">
                    {/* <!-- Tags widget--> */}
                    <div className="card mb-4">
                        <div className="card-header">Tags</div>
                        <div className="card-body container">
                            <div className="d-flex flex-wrap">
                                {mateBages ? (
                                    mateBages.map((bdg) => (
                                        <Badge
                                            key={"badge_key" + bdg._id}
                                            bgColor={bdg.color}
                                            label={bdg.name}
                                        />
                                    ))
                                ) : (
                                    <Loader />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <!-- social widget--> */}
                    <div className="card mb-4">
                        <div className="card-header">Соцсети</div>
                        <div className="card-body">
                            {mateSocial ? (
                                mateSocial.map((sm) => (
                                    <a
                                        target="_blank"
                                        key={"media-key_" + sm.key}
                                        href={sm.link}
                                        rel="noreferrer"
                                    >
                                        <i
                                            className={sm.color + " me-3 fs-3 bi bi-" + sm.icon}
                                            title={sm.icon}
                                        ></i>
                                    </a>
                                ))
                            ) : (
                                <Loader />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default User;
