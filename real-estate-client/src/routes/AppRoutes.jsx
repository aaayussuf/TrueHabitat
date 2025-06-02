import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ForSale from '../pages/ForSale';
import Rental from '../pages/Rental';
import Accommodation from '../pages/Accommodation';
import Agents from '../pages/Agents';
import Blog from '../pages/Blog';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PostProperty from '../pages/PostProperty';
import PropertyDetails from '../pages/PropertyDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
