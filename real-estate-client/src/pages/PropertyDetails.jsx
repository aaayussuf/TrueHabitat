import React from 'react';

const sampleProperty = {
  id: 1,
  title: 'Modern Family Home',
  location: 'San Francisco, CA',
  price: 1200000,
  description: 'A beautiful modern family home with 4 bedrooms and 3 bathrooms.',
  image: 'https://via.placeholder.com/600x400?text=Property+Details',
  features: ['4 Bedrooms', '3 Bathrooms', '2 Car Garage', 'Swimming Pool'],
};

const PropertyDetails = () => {
  return (
    <div style={styles.container}>
      <h1>{sampleProperty.title}</h1>
      <img src={sampleProperty.image} alt={sampleProperty.title} style={styles.image} />
      <p style={styles.location}>{sampleProperty.location}</p>
      <p style={styles.price}>${sampleProperty.price.toLocaleString()}</p>
      <p style={styles.description}>{sampleProperty.description}</p>
      <h3>Features</h3>
      <ul>
        {sampleProperty.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  location: {
    fontWeight: '600',
    color: '#666',
  },
  price: {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#004d40',
  },
  description: {
    marginTop: '1rem',
    lineHeight: '1.6',
  },
};

export default PropertyDetails;
