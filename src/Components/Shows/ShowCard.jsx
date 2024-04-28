import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';
import { StarIcon } from '../Common/StarIcon';
const ShowCard = ({ name, image, id, summary, onStarrMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split().slice(0, 10).join('').replace(/<.+>/g, '') + '...'
    : 'no description';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image}></img>
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summary}</p>
      <ActionSection>
        <a href={`/show/${id}`} target="blakn">
          Read More
        </a>
        <StarBtn type="button" onClick={() => onStarrMeClick(id)}>
          <StarIcon active={isStarred} />
          {isStarred ? 'Unstarme' : 'Star me'}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;
const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
