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

    useEffect(() => {
        const body = document.documentElement;
        body.style.backgroundColor = "";
    }, []);

    const getBadgeById = (bageId) => badgesData.find((b) => +b._id === +bageId);
    const getSkillById = (skId) => skillsData.find((s) => +s._id === +skId);

    const handleFav = () => {
        dispatch(updateMate({ ...mate, isFavourite: !mate.isFavourite }));
    };

    return mate ? (
        <div className="flex flex-col container mx-auto mt-8">
            <div className="flex-1 flex flex-col lg:flex-row gap-x-8 xl:gap-x-11">
                <div className="card lg:card-side bg-base-100 shadow-xl flex-1">
                    <figure className=" lg:rounded-b-lg lg:rounded-l-lg">
                        <img
                            src={mate.image ? require(`/src/${mate.image}`) : fallbackImg}
                            alt="Album"
                            className="rounded lg:rounded-none"
                        />
                    </figure>
                    <div className="card-body bg-[#2D3035] rounded-lg mt-6 lg:mt-0 ">
                        <h2 className="mt-1 card-title text-white text-3xl mb-3">{mate.name}</h2>
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
                <aside className="lg:w-60 xl:w-80 card shadow-xl ">
                    <div className="card-body bg-[#2D3035] rounded-lg mt-6 lg:mt-0">
                        <h2 className="card-title text-white">Tags</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </aside>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default User;
