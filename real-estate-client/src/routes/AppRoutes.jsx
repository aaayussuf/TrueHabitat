import Layout from './Layout';
import Home from '../pages/Home';
import Agents from '../pages/Agents';
import Blog from '../pages/Blogs';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Properties from '../pages/Properties';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'properties', element: <Properties /> },
      { path: 'agents', element: <Agents /> },
      { path: 'blogs', element: <Blog /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

export default routes;
