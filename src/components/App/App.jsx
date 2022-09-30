import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import SharedLayout from '../SharedLayout//SharedLayout';
import ScrollToTop from 'react-scroll-to-top';
const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));
const Cast = lazy(() => import('../../pages/Cast/Cast'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ScrollToTop smooth />
    </>
  );
};
export default App;
