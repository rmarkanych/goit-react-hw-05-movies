import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="home/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
};
export default App;
