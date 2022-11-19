import { useEffect, useState } from "react";
import { fromStorage } from "../utils/fromStorage";
import { toStorage } from "../utils/toStorage";
import { MATES_STORAGE } from "../constants/constants";
import teamData from "../mockData/teamMates.json";
import TeamMateCard from "../components/ui/teamMateCard";
import Button from "app/components/common/button";

const Favourites = () => {
    const [teamMates, setTeamMates] = useState(fromStorage(MATES_STORAGE) || teamData);
    useEffect(() => {
        if (!fromStorage(MATES_STORAGE)) {
            toStorage(MATES_STORAGE, teamMates);
        }
    }, [teamMates]);
    const favMates = teamMates.filter((m) => m.isFavourite);
    return (
        <div>
            <h1>Избранное</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
                {favMates.length
? (
                    favMates.map((m) => (
                        <TeamMateCard key={m._id} mate={m} setTeamMates={setTeamMates} />
                    ))
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
                )}
            </div>
        </div>
    );
};

export default Favourites;
