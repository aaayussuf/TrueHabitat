import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} TrueHabitat. All rights reserved.</p>
      <div style={styles.socials}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#004d40',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 2rem',
    marginTop: '2rem',
  },
  socials: {
    marginTop: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Footer;
