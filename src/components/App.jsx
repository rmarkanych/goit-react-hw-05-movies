import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Reviews from '../pages/Reviews/Reviews';
import Cast from '../pages/Cast/Cast';
import { Nav, MainWrapper, NavItem } from './App.styled';

const App = () => {
  return (
    <MainWrapper>
      <Nav>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies"> Movies </NavItem>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainWrapper>
  );
};
export default App;
