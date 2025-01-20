import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const Home = lazy(() => import('page/Home'));
const MovieActor = lazy(() => import('page/MovieActor'));
const MovieReviews = lazy(() => import('page/MovieReviews'));
const MovieDetails = lazy(() => import('page/MovieDetails'));
const Movies = lazy(() => import('page/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieActor />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
