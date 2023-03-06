import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/utils';
import { List } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(res => setReviews(res.results));
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
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
