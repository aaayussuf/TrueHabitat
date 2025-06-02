import React from 'react';
import PropertyForm from '../components/PropertyForm';

const PostProperty = () => {
  const handleSubmit = (propertyData) => {
    alert('Property posted successfully!');
    console.log('Posted property:', propertyData);
  };

  return (
    <div style={styles.container}>
      <h1>Post a Property</h1>
      <PropertyForm onSubmit={handleSubmit} />
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default PostProperty;
