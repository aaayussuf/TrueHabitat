import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div style={styles.card}>
      <img src={property.image} alt={property.title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{property.title}</h3>
        <p style={styles.location}>{property.location}</p>
        <p style={styles.price}>${property.price.toLocaleString()}</p>
        <p style={styles.description}>{property.description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    margin: '1rem',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '1rem',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    color: '#004d40',
  },
  location: {
    margin: '0 0 0.5rem 0',
    color: '#666',
  },
  price: {
    margin: '0 0 0.5rem 0',
    fontWeight: 'bold',
    color: '#00796b',
  },
  description: {
    fontSize: '0.9rem',
    color: '#444',
  },
};

export default PropertyCard;
