export const getPlaces = async () => {
  // const response = await fetch(`${process.env.BASE_URL}/places`);
  const response = await fetch(`http://localhost:7890/api/v1/places`);
  if (response.ok) {
    const {data} = await response.json();
    
    return data.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};
