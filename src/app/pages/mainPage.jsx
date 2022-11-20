import { useEffect } from "react";
// import TeamMateCard from "../components/ui/teamMateCard";
import { useDispatch, useSelector } from "react-redux";
import { getMates, getMatesLoadingStatus, loadMates } from "../store/mates";
import Loader from "app/components/ui/loader";
import HomeMateCard from "app/components/ui/homeMateCard";

const Main = () => {
    const dispatch = useDispatch();
    const mates = useSelector(getMates());
    const isLoading = useSelector(getMatesLoadingStatus());
    useEffect(() => {
        dispatch(loadMates());
    }, [isLoading]);

    useEffect(() => {
        const handleScroll = () => {
            const body = document.documentElement;
            const scroll = window.pageYOffset;
            const height = body.clientHeight;
            if (scroll < height * 0.9) {
                // dark
                body.style.backgroundColor = "#0D0D0D";
            } else if (scroll >= height * 0.9 && scroll < height * 1.8) {
                // purple
                body.style.backgroundColor = "#4E4E96";
            } else if (scroll >= height * 1.8 && scroll < height * 2.3) {
                // orange
                body.style.backgroundColor = "#378aba";
            } else {
                body.style.backgroundColor = "#ec4e2d";
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.pageYOffset]);
    useEffect(() => {
        const body = document.documentElement;
        body.style.backgroundColor = "#0D0D0D";
    }, []);

    return mates ? (
        <div className="prose lg:prose-xl">
            <div className="hero h-screen home-section-one mt-[-76px]">
                <div className="hero-content w-full">
                    <div className="container mt-[20vh]">
                        <h1 className="text-7xl md:text-8xl  lg:text-9xl font-bold text-white">
                            Team #4
                            <br />
                            Frontend
                        </h1>
                    </div>
                </div>
            </div>
            <div className="hero h-[50vh] w-full">
                <div className="hero-content w-full">
                    <div className="container text-3xl">
                        <p>
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                            id nisi.
                        </p>
                        <p className="mt-6">
                            Curabitur laoreet ante turpis, porttitor mattis dui finibus non.
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen pt-[5vh]">
                {mates.map((m, i) => (
                    <HomeMateCard key={m._id} mate={m} side={i % 2 === 0} />
                ))}
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default Main;
