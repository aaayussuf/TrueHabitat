import React from 'react';
import PropertyCard from '../components/PropertyCard';

const rentalProperties = [
  {
    id: 1,
    title: 'City Apartment',
    location: 'Chicago, IL',
    price: 1800,
    description: 'A modern apartment available for rent in downtown.',
    image: 'https://via.placeholder.com/300x200?text=City+Apartment',
  },
  {
    id: 2,
    title: 'Suburban House',
    location: 'Austin, TX',
    price: 2200,
    description: 'A spacious house in a quiet neighborhood.',
    image: 'https://via.placeholder.com/300x200?text=Suburban+House',
  },
];

const Rental = () => {
  return (
    <div style={styles.container}>
      <h1>Rental Properties</h1>
      <div style={styles.properties}>
        {rentalProperties.map((property) => (
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

export default Rental;
