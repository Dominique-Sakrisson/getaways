import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/styles.css'

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
      <ul className={styles.getawayItem} aria-label='placeList'>
        <li className={styles.name}><h1>{name}</h1></li>
        <li className={styles.description}>{description}</li>
        <li className={styles.location}>{location}</li>
        <li className={styles.pricePN}>${pricePerNight} <span className={styles.perNightSpan}>per night</span></li>
        <li><img src={image} className={styles.image} alt={image}/></li>
        <li><img src={imageThumbnail} className={styles.thumbnail} alt={imageThumbnail} /></li>
        <li className={styles.maxGuests}>maximum guest policy: {maxGuests}</li>
        <li className={styles.pets}>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
        {pool ? <li className={styles.pool}>Has a Pool!</li> : null}
        {wifi ? <li className={styles.wifi}>Free Wifi</li> : null}
      </ul>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
