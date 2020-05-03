import { useState, useEffect } from 'react';
import yelpApi from '../api/yelp';
import useLocation from './useLocation';

const searchApi = async ({
  term,
  setRestaurants,
  setErrorMessage,
  location,
  setLoading,
}) => {
  try {
    setLoading(true);
    const { latitude, longitude } = location;
    const {
      data: { businesses },
    } = await yelpApi.get('/search', {
      params: { term, limit: 50, latitude, longitude },
    });
    setRestaurants(businesses);
  } catch (error) {
    console.log(error);
    setErrorMessage('Something went wrong!');
  }
  setLoading(false);
};

const useSearchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { location, error: locationError } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (locationError) {
      setErrorMessage('Failed to get the location!');
    }
  }, [locationError]);

  useEffect(() => {
    if (!Object.keys(location).length) {
      return;
    }
    searchApi({
      term: '',
      setRestaurants,
      setErrorMessage,
      location,
      setLoading,
    });
  }, [location, locationError]);

  return {
    restaurants,
    errorMessage,
    loading,
    searchApi: (term) =>
      searchApi({
        term,
        setRestaurants,
        setErrorMessage,
        location,
        setLoading,
      }),
  };
};

export default useSearchRestaurants;
