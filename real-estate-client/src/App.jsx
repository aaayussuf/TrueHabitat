import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
