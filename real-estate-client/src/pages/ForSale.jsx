import React from 'react';
import PropertyCard from '../components/PropertyCard';

const forSaleProperties = [
  {
    id: 1,
    title: 'Luxury Villa',
    location: 'Los Angeles, CA',
    price: 2500000,
    description: 'A stunning luxury villa with a pool and garden.',
    image: 'https://via.placeholder.com/300x200?text=Luxury+Villa',
  },
  {
    id: 2,
    title: 'Cozy Cottage',
    location: 'Portland, OR',
    price: 450000,
    description: 'A cozy cottage perfect for a small family.',
    image: 'https://via.placeholder.com/300x200?text=Cozy+Cottage',
  },
];

const ForSale = () => {
  return (
    <div style={styles.container}>
      <h1>Properties For Sale</h1>
      <div style={styles.properties}>
        {forSaleProperties.map((property) => (
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

export default ForSale;
