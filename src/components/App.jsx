import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { Nav, MainWrapper } from './App.styled';

const App = () => {
  return (
    <MainWrapper>
      <Nav>
        <NavLink to="home/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainWrapper>
  );
};
export default App;
