import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Place from '../../components/places/Place'
import {getOnePlace} from '../../services/placesApi'
import styles from '../../styles/styles.css'

const Details = () => {
    const {id} = useParams();

    const [place, setPlace] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOnePlace(id).then(setPlace).finally(setTimeout(() => {
          setLoading(false);
        }, 500));
      }, []);
    
      if(loading) return <h1>loading.....</h1>;
  return (
  <>
    {/* <Header/>  */}
    <div className={styles.listContainer}> 
      <Place {...place} />;
    

    </div>
  </>
  )
}

export default Details;
