import { Link } from 'react-router-dom';

const TeamMateCard = ({ user }) => {
  const imgFallback =
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=500';
  const handleFav = (e) => {
    e.preventDefault();
    console.log('handleFav click');
  };
  return (
    user && (
      <div className="col">
        <div className="card">
          <Link
            className="text-body text-decoration-none"
            to={`/user/${user._id}`}
          >
            <img
              src={user.image ? require(`/src/${user.image}`) : imgFallback}
              className="card-img-top"
              alt={user.name || ''}
            />
          </Link>
          <div className="card-body pb-0">
            <h5 className="card-title">
              <Link
                className="text-body text-decoration-none"
                to={`/user/${user._id}`}
              >
                {user.name || ''}{' '}
                <span className="ms-2 badge bg-dark">
                  {user.age || ''}
                  <span className="fw-normal fs-6 ms-1">лет</span>
                </span>
              </Link>
            </h5>
            <p className="card-text text-dark text-opacity-50">
              {user.teaser || ''}
            </p>
          </div>
          <div className="card-footer text-end mb-1 me-2 bg-white border-0 ">
            <Link className="text-primary me-4" to={`/user/${user._id}`}>
              <i className="bi bi-box-arrow-up-right fs-5"></i>
            </Link>
            <button
              className="border-0 bg-transparent text-primary"
              href=""
              onClick={(e) => handleFav(e)}
            >
              <i className="bi bi-star fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default TeamMateCard;
