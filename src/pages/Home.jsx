import { useState, useEffect } from 'react';
import { fetchPopular } from 'components/utils';

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
      <ul>
        {popular.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </main>
  );
};
