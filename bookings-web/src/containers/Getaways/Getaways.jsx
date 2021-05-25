import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getPlaces } from '../../services/placesApi';
import PlaceList from '../../components/places/PlaceList';
import Header from '../../components/header/Header';
import styles from '../../styles/styles.css';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces().then(setPlaces).finally(setTimeout(() => {
      setLoading(false);
    }, 500));
  }, []);

  if(loading) return <h1>loading.....</h1>;
  return (
  <>
    <Header/> 
    <div className={styles.listContainer}> 
    
      <PlaceList places={places} loading={loading}/>;
    

    </div>
  </>
  )
};

export default Getaways;
