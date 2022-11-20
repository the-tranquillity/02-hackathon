/* eslint-disable  */
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
import declOfNum from "app/utils/age";
import { toast } from "react-toastify";
const parse = require("html-react-parser");

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
                    name: SMEDIA[sKey].icoName,
                    img: SMEDIA[sKey].icoBg,
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

    useEffect(() => {
        const body = document.documentElement;
        body.style.backgroundColor = "";
    }, []);

    const getBadgeById = (bageId) => badgesData.find((b) => +b._id === +bageId);
    const getSkillById = (skId) => skillsData.find((s) => +s._id === +skId);

    const handleFav = () => {
        const curStatus = !mate.isFavourite;
        dispatch(updateMate({ ...mate, isFavourite: !mate.isFavourite }));
        curStatus ? toast.success(`${mate.name} добавлен`) : toast.info(`${mate.name} удалён`);
    };

    return mate ? (
        <div className="flex flex-col container mx-auto mt-8 pb-14 px-3 lg:px-0">
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-11">
                <div className="flex flex-col gap-y-8 xl:gap-y-11 w-full xl:w-3/4">
                    <div className="card lg:card-side lg:shadow-xl">
                        <figure className=" lg:rounded-b-lg lg:rounded-l-lg">
                            <img
                                src={mate.image ? require(`/src/${mate.image}`) : fallbackImg}
                                alt="Album"
                                className="rounded lg:rounded-none"
                            />
                        </figure>
                        <div className="card-body bg-[#2D3035] rounded-lg mt-6 lg:mt-0 pb-3">
                            <h2 className="mt-1 card-title text-white text-3xl mb-3 font-bold">
                                {mate.name}
                                <br />
                                <span className="text-sm ml-4">
                                    {mate.age}{" "}
                                    {mate.age ? declOfNum(mate.age, [" год", " года", " лет"]) : ""}
                                </span>
                            </h2>
                            <p>{mate.teaser}</p>
                            <div className="card-actions justify-end">
                                <Button
                                    bgColor="transparent"
                                    action={handleFav}
                                    handler={true}
                                    tsptHover={true}
                                >
                                    <i
                                        className={
                                            "text-accent text-xl bi bi-star" +
                                            (mate.isFavourite ? "-fill" : "")
                                        }
                                    ></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-[#2D3035] shadow-xl">
                        <div className="card-body  rounded-lg">
                            <h2 className="card-title text-white mb-4">Роль в проекте</h2>
                            <div className="flex gap-4">{mate.about}</div>
                        </div>
                    </div>
                    <div className="card bg-[#2D3035] shadow-xl">
                        <div className="card-body  rounded-lg">
                            <h2 className="card-title text-white mb-4">Навыки</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
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
                <div className="flex flex-col gap-y-8  w-full xl:w-1/4">
                    <div className="card bg-[#2D3035] shadow-xl">
                        <div className="card-body  rounded-lg">
                            <h2 className="card-title text-white mb-4">Tags</h2>
                            <div className="flex gap-4">
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
                    <div className="card bg-[#2D3035] shadow-xl">
                        <div className="card-body rounded-lg">
                            <h2 className="card-title text-white mb-4">Соцсети</h2>
                            <div className="flex gap-4">
                                {mateSocial ? (
                                    mateSocial.map((sm) => (
                                        <a
                                            className="p-0"
                                            target="_blank"
                                            key={"media-key_" + sm.key}
                                            href={sm.link}
                                            rel="noreferrer"
                                            title={sm.name}
                                        >
                                            {parse(sm.img)}
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
        </div>
    ) : (
        <Loader />
    );
};

export default User;
