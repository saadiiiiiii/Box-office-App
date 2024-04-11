const ShowCard = ({ name, image, id, summary, onStarrMeClick }) => {
  const summaryStripped = summary
    ? summary.split().slice(0, 10).join('').replace(/<.+>/g, '')
    : 'no description';
  return (
    <div>
      <div>
        <img src={image}></img>
      </div>
      <h1>{name}</h1>
      <p>{summary}</p>
      <div>
        <a href={`/show/${id}`} target="blakn">
          Read More
        </a>
        <button type="button" onClick={() => onStarrMeClick(id)}>
          {' '}
          Star me
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
