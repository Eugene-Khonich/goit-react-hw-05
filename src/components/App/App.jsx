import './App.module.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import trandingMovies from '../../api';
// import searchMovies from '../../api';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await trandingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchMovies();
  });

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
