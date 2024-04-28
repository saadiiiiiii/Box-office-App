import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';
import { Link } from 'react-router-dom';
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image}></img>
      </SearchImgWrapper>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes form ${country}` : 'No data'} </p>
      {!!birthday && <p>Born on {birthday}</p>}
      <p>{deathday ? `Died at ${deathday}` : 'Still Alive'}</p>
      <div></div>
    </SearchCard>
  );
};
export default ActorCard;
