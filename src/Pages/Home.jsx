import { useState } from 'react';
import { searchForShows, searchForPeople } from '../Api/Tvmaze';
const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apierror, setApierror] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  console.log(searchOption);
  const onInputChange = e => {
    setSearchStr(e.target.value);
  };
  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };
  const onSearch = async e => {
    e.preventDefault();
    try {
      if (searchOption === 'shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
      setApierror(null);
    } catch (error) {
      setApierror(error);
    }
  };
  const renderApiData = () => {
    if (apierror) {
      return <div>Error:{apierror.message}</div>;
    }
    if (apiData) {
      {
        return apiData[0].show
          ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
          : apiData.map(data => (
              <div key={data.person.id}>{data.person.name}</div>
            ));
      }
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption == 'shows'}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Cleek meee</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
