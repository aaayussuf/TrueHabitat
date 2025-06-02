import React from 'react';
import PropertyCard from '../components/PropertyCard';

const sampleProperties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'San Francisco, CA',
    price: 1200000,
    description: 'A beautiful modern family home with 4 bedrooms and 3 bathrooms.',
    image: 'https://via.placeholder.com/300x200?text=Property+1',
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    location: 'New York, NY',
    price: 850000,
    description: 'A stylish apartment located in the heart of the city.',
    image: 'https://via.placeholder.com/300x200?text=Property+2',
  },
];

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to TrueHabitat</h1>
      <p>Your dream home is just a click away.</p>
      <div style={styles.properties}>
        {sampleProperties.map((property) => (
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

export default Home;
