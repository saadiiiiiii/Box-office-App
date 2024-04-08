const ShowMainData = ({ image, name, rating, summary, genre }) => {
  return (
    <div>
      <img src={image ? image.original : 'not found.png'} />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'hello'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div>
        genres:
        <div>
          {genre.map(genre => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
