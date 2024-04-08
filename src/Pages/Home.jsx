import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FormElements from '../Components/FormElements';
import { searchForShows, searchForPeople } from '../Api/Tvmaze';
import ShowGrid from '../Components/Shows/ShowGrid';
import ActorsGrid from '../Components/Actors/ActorsGrid';
const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apierror } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  // const [apiData, setApiData] = useState(null);
  // const [apierror, setApierror] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    // try {
    //   if (searchOption === 'shows') {
    //     const result = await searchForShows(q);
    //     setApiData(result);
    //   } else {
    //     const result = await searchForPeople(q);
    //     setApiData(result);
    //   }
    //   setApierror(null);
    // } catch (error) {
    //   setApierror(error);
    // }
    setFilter({ q, searchOption });
  };
  const renderApiData = () => {
    if (apierror) {
      return <div>Error:{apierror.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No results</div>;
    }
    if (apiData) {
      {
        return apiData[0].show ? (
          <ShowGrid shows={apiData} />
        ) : (
          <ActorsGrid actors={apiData} />
        );
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
