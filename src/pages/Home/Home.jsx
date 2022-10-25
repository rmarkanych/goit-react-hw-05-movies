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
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrendMovie().then(data => setMoviesTrend(data.results));
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {moviesTrend.map(({ title, id, vote_average, poster_path }) => {
          return (
            <HomeItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <HomeImage
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
                  }
                  alt={title}
                />
              </Link>
              <HomeParagrapher>{title}</HomeParagrapher>
              <HomeRate>{vote_average.toFixed(1)}</HomeRate>
            </HomeItem>
          );
        })}
      </HomeList>
    </>
  );
};

export default Home;
