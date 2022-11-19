// import { MATES_STORAGE } from "./constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMates, getMatesLoadingStatus, loadMates } from "./store/mates";

// import localStorageService from "./services/localStorage.service";

const Appt = () => {
    // console.log("test yes-no:", localStorageService.getMates() ? "yes" : "no");
    // console.log("test yes-no2:", localStorage.getItem(MATES_STORAGE) ? "yes" : "no");
    /* console.log(
        "test:",
        localStorageService.getMates().then((s) => {
            return s === null
        })
            ? "yes"
            : "nooo"
    ); */
    const dispatch = useDispatch();
    const mates = useSelector(getMates());
    const isLoading = useSelector(getMatesLoadingStatus());
    useEffect(() => {
        dispatch(loadMates());
    }, [isLoading]);
    console.log("mates", mates);
    return <>App test</>;
};

export default Appt;
