import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/utils';
import { List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getReviews(id).then(res => {
      setReviews(res.results);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <b>Author: {author}</b>
                <p>{content}</p>
              </li>
            );
          })}
        </List>
      ) : (
        <p>Sorry, there are no reviews yet 😢</p>
      )}
    </>
  );
};

export default Reviews;
