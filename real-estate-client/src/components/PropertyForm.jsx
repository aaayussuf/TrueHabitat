import React, { useState } from 'react';

const PropertyForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [location, setLocation] = useState(initialData.location || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [image, setImage] = useState(initialData.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, location, price: Number(price), description, image });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          required
        />
      </label>
      <label style={styles.label}>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
          required
        />
      </label>
      <label style={styles.label}>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
          required
        />
      </label>
      <label style={styles.label}>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
          required
        />
      </label>
      <label style={styles.label}>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
          required
        />
      </label>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '1rem auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginBottom: '0.75rem',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '80px',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem',
    backgroundColor: '#004d40',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default PropertyForm;
