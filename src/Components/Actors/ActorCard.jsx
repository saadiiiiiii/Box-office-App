import { Link } from 'react-router-dom';
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image}></img>
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes form ${country}` : 'No data'} </p>
      {!!birthday && <p>Born on {birthday}</p>}
      <p>{deathday ? `Died at ${deathday}` : 'Still Alive'}</p>
      <div>
        <Link to="/">Read More</Link>
        <button type="button"> Star me</button>
      </div>
    </div>
  );
};
export default ActorCard;
