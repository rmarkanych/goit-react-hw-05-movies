import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  MoviesForm,
  MoviesInput,
  MoviesBtn,
  BtnIcon,
  MovieItem,
  MovieImage,
  MovieParagrapher,
  MovieRate,
  MovieList,
} from './Movies.styled';
import { getSearchedQuery } from '../../services/myApi';

const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movie';
  const query = search.get('query');
  const page = search.get('page');
  const onFormSubmit = e => {
    e.preventDefault();
    setSearch({ query: searchInput });
  };

  useEffect(() => {
    if (!query) return;
    getSearchedQuery(query, page).then(data => setSearchedMovies(data.results));
  }, [query, page]);
  return (
    <>
      <MoviesForm onSubmit={onFormSubmit}>
        <MoviesInput
          type="text"
          name="searchInput"
          value={searchInput}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Your may contain only letters without spaces."
          required
          onChange={e => setSearchInput(e.target.value)}
        />
        <MoviesBtn type="submit">
          <BtnIcon>Search</BtnIcon>
        </MoviesBtn>
      </MoviesForm>
      <MovieList>
        {searchedMovies.map(({ title, id, vote_average, poster_path }) => {
          return (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MovieImage
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
                  }
                  alt={title}
                />
              </Link>
              <MovieParagrapher>{title}</MovieParagrapher>
              <MovieRate>{vote_average.toFixed(1)}</MovieRate>
            </MovieItem>
          );
        })}
      </MovieList>
    </>
  );
};

export default Movies;
