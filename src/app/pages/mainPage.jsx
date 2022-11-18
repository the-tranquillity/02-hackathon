import { useEffect, useState } from 'react';
import { fromStorage } from '../utils/fromStorage';
import { toStorage } from '../utils/toStorage';
import TeamMateCard from '../components/ui/teamMateCard';
import { MATES_STORAGE } from '../constants';
import teamMockData from '../mockData/teamMates.json';

const Main = () => {
  const [teamMates, setTeamMates] = useState(
    fromStorage(MATES_STORAGE) || teamMockData
  );
  useEffect(() => {
    if (!fromStorage(MATES_STORAGE)) {
      toStorage(MATES_STORAGE, teamMates);
    }
  }, [teamMates]);
  console.log('teamMates', teamMates);
  return (
    <div>
      <h1>О нашей команде</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        consequatur culpa cum cumque debitis earum eos eum ex exercitationem
        fugiat, fugit iure magni minima molestiae, neque nobis non praesentium
        quae quibusdam quod rem sit sunt suscipit temporibus velit veniam, vitae
        voluptatum. Aliquam at blanditiis debitis deleniti distinctio, ea
        exercitationem ipsam, iure magni nemo nihil, qui repudiandae similique
        sint soluta. Adipisci alias animi aspernatur dolor, doloremque ipsum
        laboriosam maiores optio quibusdam, reiciendis sapiente vero voluptas.
        Adipisci magni minima repellat reprehenderit vero! Eligendi, modi,
        nesciunt? A aliquam corporis cum delectus dignissimos, harum inventore
        labore nesciunt non repellendus sit soluta totam veniam voluptates.
      </p>
      <h2 className="my-2">Участники</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
        {teamMates.map((m) => (
          <TeamMateCard key={m._id} user={m} setTeamMates={setTeamMates} />
        ))}
      </div>
    </div>
  );
};

export default Main;
