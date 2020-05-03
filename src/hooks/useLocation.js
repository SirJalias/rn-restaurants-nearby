import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setError(true);
      }

      try {
        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      } catch (e) {
        console.log('error location', e);
        setError(true);
      }
    })();
  }, []);

  return { location, error };
};

export default useLocation;
