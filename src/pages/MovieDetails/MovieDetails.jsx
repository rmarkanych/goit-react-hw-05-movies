import { useParams, Outlet } from 'react-router-dom';
import { getSearchedDetails } from '../../services/myApi';
import { useEffect, useState } from 'react';
import {
  Item,
  Image,
  MovieWrapper,
  Title,
  ScoreParagrapher,
  OverviewTitle,
  OverviewParagrapher,
  GenresTitle,
  GenresParapher,
  MainWrap,
  NavBtn,
  BtnWrap,
} from './MovieDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getSearchedDetails(movieId).then(data => setMovie(data));
    // eslint-disable-next-line
  }, []);
  if (movie === null) return;

  const {
    original_title,
    // popularity,
    poster_path,
    overview,
    genres,
    vote_average,
    id,
  } = movie;

  return (
    <>
      <MainWrap>
        <Item key={id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="dasdas"
          />
          <MovieWrapper>
            <Title>{original_title}</Title>
            <ScoreParagrapher>
              User Score: {((vote_average * 100) / 10).toFixed(1)}%
            </ScoreParagrapher>
            <OverviewTitle>Overview:</OverviewTitle>
            <OverviewParagrapher>{overview}</OverviewParagrapher>
            <GenresTitle>Genres:</GenresTitle>
            <GenresParapher>
              {genres.map(({ name }) => name + ' ')}
            </GenresParapher>
          </MovieWrapper>
        </Item>
      </MainWrap>
      <BtnWrap>
        <NavBtn to={`/movies/${id}/cast`}>Cast</NavBtn>
        <NavBtn to={`/movies/${id}/reviews`}>Review</NavBtn>
      </BtnWrap>

      <Outlet />
    </>
  );
};

export default MoviesDetails;
