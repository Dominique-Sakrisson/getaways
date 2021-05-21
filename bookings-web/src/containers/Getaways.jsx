import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces().then(setPlaces).finally(setTimeout(() => {
      setLoading(false);
    }, 500));
  }, []);

  if(loading) return <h1>loading.....</h1>;
  return <PlaceList places={places} loading={loading}/>;
};

export default Getaways;
