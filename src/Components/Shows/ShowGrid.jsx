import ShowCard from './ShowCard';
const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={data.show.image ? data.show.image.medium : '/not found.png'}
          summary={data.summary}
        ></ShowCard>
      ))}
    </div>
  );
};
export default ShowGrid;
