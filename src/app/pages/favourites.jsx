import { useEffect, useState } from "react";
import TeamMateCard from "../components/ui/teamMateCard";
import Button from "app/components/common/button";
import { useDispatch, useSelector } from "react-redux";
import { getMates, getMatesLoadingStatus, loadMates } from "../store/mates";
import Loader from "app/components/ui/loader";

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
  return (
    <div>
      <h1>Избранное</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
        {mates
? (
          favMates.length
? (
            favMates.map((m) => <TeamMateCard key={m._id} mate={m} />)
          )
: (
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
        )
: (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Favourites;
