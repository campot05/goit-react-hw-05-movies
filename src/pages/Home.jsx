import { useState, useEffect } from 'react';
import { fetchPopular } from 'components/utils';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    async function getPopularMovie() {
      const { results } = await fetchPopular();
      setPopular(results);
    }
    getPopularMovie();
  }, []);
  return (
    <main>
      <h1 className="movie-title">Trending today</h1>
      <ul className="movie-list">
        {popular.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link className="movie-list__link">{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
