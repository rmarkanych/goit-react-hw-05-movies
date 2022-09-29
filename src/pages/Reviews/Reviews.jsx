import { getMovieReview } from '../../services/myApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ReviewList,
  ErrorTitle,
  ReviewItem,
  AuthorName,
  ReviewContent,
  ReviewTextWrapper,
} from './Reviews.styled';
const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReview(movieId).then(data => setMovieReview(data.results));
    // eslint-disable-next-line
  }, []);

  return (
    <ReviewList>
      {movieReview.length === 0 ? (
        <ErrorTitle>We don't have any reviews for this movie 😢</ErrorTitle>
      ) : (
        movieReview.map(({ author, content, id }) => {
          return (
            <ReviewItem key={id}>
              <AuthorName>
                <ReviewTextWrapper>Author: </ReviewTextWrapper> {author}
              </AuthorName>
              <ReviewContent>
                <ReviewTextWrapper>Review:</ReviewTextWrapper> {content}
              </ReviewContent>
            </ReviewItem>
          );
        })
      )}
    </ReviewList>
  );
};

export default Reviews;
