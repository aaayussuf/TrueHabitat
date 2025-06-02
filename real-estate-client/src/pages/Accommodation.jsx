import React from 'react';
import PropertyCard from '../components/PropertyCard';

const accommodationProperties = [
  {
    id: 1,
    title: 'Beachside Bungalow',
    location: 'Miami, FL',
    price: 1500000,
    description: 'A beautiful bungalow with ocean views.',
    image: 'https://via.placeholder.com/300x200?text=Beachside+Bungalow',
  },
  {
    id: 2,
    title: 'Mountain Cabin',
    location: 'Denver, CO',
    price: 900000,
    description: 'A cozy cabin in the mountains.',
    image: 'https://via.placeholder.com/300x200?text=Mountain+Cabin',
  },
];

const Accommodation = () => {
  return (
    <div style={styles.container}>
      <h1>Accommodation</h1>
      <div style={styles.properties}>
        {accommodationProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  properties: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
};

export default Accommodation;
