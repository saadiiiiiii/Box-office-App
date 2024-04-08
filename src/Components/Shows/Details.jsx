const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <div>
        <p>Status:{status}</p>
        <p>
          Premierd:{premiered}
          {!!network && `on ${network.name}`}
        </p>
        <p>{status}</p>
      </div>
    </div>
  );
};
export default Details;
