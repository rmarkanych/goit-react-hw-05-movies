import { getMovieCast } from '../../services/myApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  CastList,
  CastItem,
  CastImage,
  CastParagrapher,
  SpanWrap,
} from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    getMovieCast(movieId).then(data => setMovieCast(data.cast));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <CastList>
        {movieCast.map(
          ({ character, name, profile_path, popularity, cast_id }) => {
            return (
              <CastItem key={cast_id}>
                <CastImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
                  }
                  alt={name}
                />
                <CastParagrapher>
                  <SpanWrap>Name:</SpanWrap> {name}
                </CastParagrapher>
                <CastParagrapher>
                  <SpanWrap>Character:</SpanWrap> {character}
                </CastParagrapher>
                <CastParagrapher>
                  <SpanWrap>Popularity:</SpanWrap> {popularity.toFixed(1)}
                </CastParagrapher>
              </CastItem>
            );
          }
        )}
      </CastList>
    </>
  );
};

export default Cast;
