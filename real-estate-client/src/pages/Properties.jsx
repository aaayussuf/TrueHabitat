import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Properties = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.container}>
      <h1>Properties</h1>
      <nav style={styles.nav}>
        <Link to="for-sell" style={isActive('/properties/for-sell') ? styles.activeLink : styles.link}>For Sell</Link>
        <Link to="for-rent" style={isActive('/properties/for-rent') ? styles.activeLink : styles.link}>For Rent</Link>
        <Link to="for-investments" style={isActive('/properties/for-investments') ? styles.activeLink : styles.link}>For Investments</Link>
      </nav>
      <div style={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#004d40',
    fontWeight: '500',
  },
  activeLink: {
    textDecoration: 'underline',
    color: '#00796b',
    fontWeight: '700',
  },
  outlet: {
    marginTop: '1rem',
  },
};

export default Properties;
