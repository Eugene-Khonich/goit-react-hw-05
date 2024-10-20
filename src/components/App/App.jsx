import './App.module.css';
import { Route, Routes } from 'react-router-dom';
// import trandingMovies from '../../api';
// import searchMovies from '../../api';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" />
      </Routes>
    </>
  );
};

export default App;
