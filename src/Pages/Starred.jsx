import { getShowsByIds } from '../Api/Tvmaze';
import { useStarredShows } from '../Lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import ShowGrid from '../Components/Shows/ShowGrid';
const Starred = () => {
  const [starredShowsids] = useStarredShows();
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsids],
    queryFn: () =>
      getShowsByIds(starredShowsids).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows}></ShowGrid>;
  }
  if (starredShows?.length === 0) {
    return <div>No Starred Shows</div>;
  }
  if (starredShowsError) {
    return <div>Error Ocurred:{starredShowsError.message}</div>;
  }

  return <div> Data Is Loading </div>;
};
export default Starred;
