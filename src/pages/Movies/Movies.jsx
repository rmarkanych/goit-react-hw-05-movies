//import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
          onChange={e => setSearchInput(e.target.value)}
        />
        <MoviesBtn type="submit">
          <BtnIcon>Search</BtnIcon>
        </MoviesBtn>
      </MoviesForm>

      <MovieList>
        {searchedMovies.map(({ title, id, vote_average, poster_path }) => {
          console.log(searchedMovies);
          return (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
