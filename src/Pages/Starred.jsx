import { getShowsByIds } from '../Api/Tvmaze';
import { useStarredShows } from '../Lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import ShowGrid from '../Components/Shows/ShowGrid';
import { TextCenter } from '../Components/Common/TextCenter';
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
    return <TextCenter>No Starred Shows</TextCenter>;
  }
  if (starredShowsError) {
    return <TextCenter>Error Ocurred:{starredShowsError.message}</TextCenter>;
  }

  return <TextCenter> Data Is Loading.... </TextCenter>;
};
export default Starred;
