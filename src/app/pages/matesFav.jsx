import { useEffect, useState } from "react";
import Button from "app/components/common/button";
import Loader from "app/components/ui/loader";
import { useDispatch, useSelector } from "react-redux";
import { getMates, getMatesLoadingStatus, loadMates } from "../store/mates";
import FavMateCard from "app/components/ui/favMateCard";

const Favourites = () => {
    const [favMates, setFavMates] = useState([]);
    const dispatch = useDispatch();
    const mates = useSelector(getMates());
    const isLoading = useSelector(getMatesLoadingStatus());
    useEffect(() => {
        dispatch(loadMates());
    }, [isLoading]);
    useEffect(() => {
        dispatch(loadMates());
        if (mates) setFavMates(mates.filter((m) => m.isFavourite));
    }, [isLoading]);

    useEffect(() => {
        const body = document.documentElement;
        body.style.backgroundColor = "";
    }, []);

    return (
        <div className="flex flex-col container mx-auto mt-8 pb-14 px-3 lg:px-0">
            <h1 className="mt-1 text-white font-bold text-3xl mb-16">Избранное</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9">
                {mates ? (
                    favMates.length ? (
                        favMates.map((m) => <FavMateCard key={m._id} mate={m} />)
                    ) : (
                        <div className="col">
                            <p>В избранном пока никого нет.</p>
                            <Button
                                bgColor="primary"
                                to="/"
                                routerLink={true}
                                label="Посмотреть участников команды"
                            />
                        </div>
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default Favourites;
