import { useParams, Link } from 'react-router-dom';
import { getShowById } from '../Api/Tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../Components/Shows/ShowMainData';
import Details from '../Components/Shows/Details';
import Season from '../Components/Shows/Season';
import Cast from '../Components/Shows/Cast';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We have an error:{showError.message}</div>;
  }
  if (showData) {
    return (
      <div>
        <Link to="/">Go Back To Home Page</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genre={showData.genres}
        />
        <div>
          <h1>Details</h1>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Season seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>Data Is Loading</div>;
};
export default Show;
