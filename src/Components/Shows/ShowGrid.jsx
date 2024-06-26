import { useStarredShows } from '../../Lib/useStarredShows';
import ShowCard from './ShowCard';
import { FlexGrid } from '../Common/FlexGrid';
const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarredShows] = useStarredShows();
  const onStarrMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (!isStarred) {
      dispatchStarredShows({ type: 'STAR', showId });
    } else {
      dispatchStarredShows({ type: 'UNSTAR', showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={data.show.image ? data.show.image.medium : '/not found.png'}
          summary={data.summary}
          onStarrMeClick={onStarrMeClick}
          isStarred={starredShows.includes(data.show.id)}
        ></ShowCard>
      ))}
    </FlexGrid>
  );
};
export default ShowGrid;
