import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  HomeList,
  HomeItem,
  HomeImage,
  HomeTitle,
  HomeParagrapher,
  HomeRate,
} from '../Home/Home.styled';
// import getTrendMovie from '../../services/myApi';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  useEffect(() => {
    // getTrendMovie().then(r => console.log(r));
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=3fda262e4e265cf3e0f035e612dee2c1'
      )
      .then(r => setMoviesTrend(r.data.results));
  }, []);
  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {moviesTrend.map(({ title, id, vote_average, poster_path }) => {
          return (
            <HomeItem key={id}>
              <HomeImage
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <HomeParagrapher>{title}</HomeParagrapher>
              <HomeRate>{vote_average.toFixed(1)}</HomeRate>
            </HomeItem>
          );
        })}
      </HomeList>
    </div>
  );
};

export default Home;
