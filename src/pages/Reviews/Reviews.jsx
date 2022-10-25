import { getMovieReview } from '../../services/myApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSadTear } from 'react-icons/fa';
import {
  ReviewList,
  ErrorTitle,
  ReviewItem,
  AuthorName,
  ReviewContent,
  ReviewTextWrapper,
} from './Reviews.styled';
import ReactReadMoreReadLess from 'react-read-more-read-less';

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
        <ErrorTitle>
          We don't have any reviews for this movie{' '}
          <FaSadTear style={{ marginLeft: '5px' }} />
        </ErrorTitle>
      ) : (
        movieReview.map(({ author, content, id }) => {
          return (
            <ReviewItem key={id}>
              <AuthorName>
                <ReviewTextWrapper>Author: </ReviewTextWrapper> {author}
              </AuthorName>
              <ReviewContent>
                <ReviewTextWrapper>Review:</ReviewTextWrapper>
                <ReactReadMoreReadLess
                  charLimit={1000}
                  readMoreText={'Read more ▼'}
                  readLessText={'Read less ▲'}
                >
                  {content}
                </ReactReadMoreReadLess>
              </ReviewContent>
            </ReviewItem>
          );
        })
      )}
    </ReviewList>
  );
};

export default Reviews;
