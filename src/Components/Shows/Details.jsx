import { styled } from 'styled-components';
const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <DetailsWrapper>
        <p>Status:{status}</p>
        <p>
          Premierd:{premiered}
          {!!network && `on ${network.name}`}
        </p>
        <p>{status}</p>
      </DetailsWrapper>
    </div>
  );
};
export default Details;
const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
