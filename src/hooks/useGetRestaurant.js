import { useState, useEffect } from 'react';
import yelpApi from '../api/yelp';

const get = async ({ id, setErrorMessage }) => {
  try {
    const { data } = await yelpApi.get(`/${id}`);
    return data;
  } catch (error) {
    setErrorMessage('Something went wrong!');
    return null;
  }
};

const useGetRestaurant = (id) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callTheApi = async () => {
      setLoading(true);
      const info = await get({ id, setErrorMessage });
      setRestaurant(info);
      setLoading(false);
    };

    callTheApi();
  }, [id]);

  return {
    restaurant,
    errorMessage,
    loading,
  };
};

export default useGetRestaurant;
