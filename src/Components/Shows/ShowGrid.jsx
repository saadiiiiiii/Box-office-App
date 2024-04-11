import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarredShows] = usePersistedReducer(
    starredShowsReducer,
    [],
    'starredShows'
  );
  const onStarrMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (!isStarred) {
      dispatchStarredShows({ type: 'STAR', showId });
    } else {
      dispatchStarredShows({ type: 'UNSTAR', showId });
    }
  };
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={data.show.image ? data.show.image.medium : '/not found.png'}
          summary={data.summary}
          onStarrMeClick={onStarrMeClick}
        ></ShowCard>
      ))}
    </div>
  );
};
export default ShowGrid;
