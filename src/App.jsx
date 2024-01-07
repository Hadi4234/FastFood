/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Recommended from './components/Recommended';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const url = import.meta.env.VITE_API_URL || process.env.URL;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          // dispatch(fetchItems(result.Items));
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=' container relative mx-auto max-w-screen-2xl font-poppins'>
      <Navbar />
      <Hero />
      <Popular />
      <Recommended />
      <Footer />
    </div>
  );
};

export default App;
