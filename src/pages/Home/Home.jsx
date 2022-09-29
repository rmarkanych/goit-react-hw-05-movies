import { useEffect, useState } from 'react';
import {
  HomeList,
  HomeItem,
  HomeImage,
  HomeTitle,
  HomeParagrapher,
  HomeRate,
} from '../Home/Home.styled';
import { getTrendMovie } from '../../services/myApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  useEffect(() => {
    getTrendMovie().then(data => setMoviesTrend(data.results));
  }, []);
  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {moviesTrend.map(({ title, id, vote_average, poster_path }) => {
          return (
            <HomeItem key={id}>
              <Link to={`/movies/${id}`}>
                <HomeImage
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
              </Link>
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
