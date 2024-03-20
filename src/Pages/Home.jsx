import { useState } from 'react';
import { searchForShows } from '../Api/Tvmaze';
const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apierror, setApierror] = useState(null);
  const onInputChange = e => {
    setSearchStr(e.target.value);
  };
  const onSearch = async e => {
    e.preventDefault();
    try {
      setApierror(null);
      const result = await searchForShows(searchStr);
      setApiData(result);
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
        return apiData.map(data => (
          <div key={data.show.id}>{data.show.name}</div>
        ));
      }
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange} />
        <button type="submit">Cleek meee</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
