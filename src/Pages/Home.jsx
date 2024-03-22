import { useState } from 'react';
import FormElements from '../Components/FormElements';
import { searchForShows, searchForPeople } from '../Api/Tvmaze';
const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apierror, setApierror] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      if (searchOption === 'shows') {
        const result = await searchForShows(q);
        setApiData(result);
      } else {
        const result = await searchForPeople(q);
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
      <FormElements onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
