import { useEffect } from "react";
import TeamMateCard from "../components/ui/teamMateCard";
import { useDispatch, useSelector } from "react-redux";
import { getMates, getMatesLoadingStatus, loadMates } from "../store/mates";
import Loader from "app/components/ui/loader";

const Main = () => {
    const dispatch = useDispatch();
    const mates = useSelector(getMates());
    const isLoading = useSelector(getMatesLoadingStatus());
    useEffect(() => {
        dispatch(loadMates());
    }, [isLoading]);
    return mates
? (
        <div>
            <h1>О нашей команде</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur
                culpa cum cumque debitis earum eos eum ex exercitationem fugiat, fugit iure magni
                minima molestiae, neque nobis non praesentium quae quibusdam quod rem sit sunt
                suscipit temporibus velit veniam, vitae voluptatum. Aliquam at blanditiis debitis
                deleniti distinctio, ea exercitationem ipsam, iure magni nemo nihil, qui repudiandae
                similique sint soluta. Adipisci alias animi aspernatur dolor, doloremque ipsum
                laboriosam maiores optio quibusdam, reiciendis sapiente vero voluptas. Adipisci
                magni minima repellat reprehenderit vero! Eligendi, modi, nesciunt? A aliquam
                corporis cum delectus dignissimos, harum inventore labore nesciunt non repellendus
                sit soluta totam veniam voluptates.
            </p>
            <h2 className="my-2">Участники</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
                {mates.map((m) => (
                    <TeamMateCard key={m._id} mate={m} />
                ))}
            </div>
        </div>
    )
: (
        <Loader />
    );
};

export default Main;
