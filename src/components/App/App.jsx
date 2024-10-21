import './App.module.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('../..//pages/HomePage/HomePage'));

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
