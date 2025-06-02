import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>
        TrueHabitat is dedicated to helping you find your dream home. With years of experience in the real estate market, our team is committed to providing exceptional service and expert advice.
      </p>
      <p>
        Our mission is to make the process of buying, selling, or renting properties as smooth and enjoyable as possible.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default AboutUs;
