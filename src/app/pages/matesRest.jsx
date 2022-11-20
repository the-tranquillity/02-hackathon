// eslint-disable
import { useCallback, useEffect, useState } from "react";
import Button from "app/components/common/button";
import { useDispatch, useSelector } from "react-redux";
import { getMates, getMatesLoadingStatus, loadMates } from "../store/mates";
import FavMateCard from "app/components/ui/favMateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Mates = () => {
    const [favMates, setFavMates] = useState([]);
    const [swiperRef, setSwiperRef] = useState();
    const dispatch = useDispatch();
    const mates = useSelector(getMates());
    const isLoading = useSelector(getMatesLoadingStatus());
    useEffect(() => {
        dispatch(loadMates());
    }, [isLoading]);
    useEffect(() => {
        dispatch(loadMates());
        if (mates) setFavMates(mates.filter((m) => !m.isFavourite));
    }, [isLoading]);

    useEffect(() => {
        const body = document.documentElement;
        body.style.backgroundColor = "";
    }, []);

    const handleLeftClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
    }, [swiperRef]);

    const handleRightClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slideNext();
    }, [swiperRef]);

    return (
        <div className="flex flex-col container mx-auto mt-8 pb-14 px-3 lg:px-0">
            <h1 className="mt-1 text-white font-bold text-3xl">Участники</h1>
            <p className=" mb-16 text-[#888]">не добавленые в избранное</p>
            <div className=" px-24 relative ">
                {mates &&
                    (favMates.length ? (
                        <>
                            <div>
                                <Button
                                    action={handleLeftClick}
                                    handler={true}
                                    bgColor={"transparent"}
                                    tsptHover={true}
                                    moreClasses="my-swiper-prev"
                                >
                                    <i className="bi bi-arrow-left-circle-fill text-3xl text-teal-500 hover:text-teal-400"></i>
                                </Button>
                            </div>
                            <Swiper
                                onSwiper={setSwiperRef}
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={false}
                                navigation={false}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {favMates.map((m) => (
                                    <SwiperSlide key={"mate-" + m._id}>
                                        <FavMateCard key={"slide-" + m._id} mate={m} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div>
                                <Button
                                    action={handleRightClick}
                                    handler={true}
                                    bgColor={"transparent"}
                                    tsptHover={true}
                                    moreClasses="my-swiper-next"
                                >
                                    <i className="bi bi-arrow-right-circle-fill text-3xl text-teal-500 hover:text-teal-400"></i>
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className="col">
                            <p>Все в избранном</p>
                            <Button
                                bgColor="primary"
                                to="/favourites"
                                routerLink={true}
                                label="Посмотреть избранных"
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Mates;
