import { MoviesForm, MoviesInput, MoviesBtn, BtnIcon } from './Movies.styled';

const Movies = () => {
  return (
    <MoviesForm>
      <MoviesInput type="text" name="searchInput" />
      <MoviesBtn type="submit">
        <BtnIcon>Search</BtnIcon>
      </MoviesBtn>
    </MoviesForm>
  );
};

export default Movies;
