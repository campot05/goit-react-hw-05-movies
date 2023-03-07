import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getByQuery } from 'components/utils';
const Movies = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [query, setQuery] = useState(() => searchQuery || '');

  useEffect(() => {
    const getData = async () => {
      const { results } = await getByQuery(searchQuery);
      setData(results);
    };
    if (searchQuery) {
      getData();
    }
  }, [searchQuery]);

  const location = useLocation();
  console.log(location);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(searchQuery);
    setSearchParams({ query: query });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <div>
        {data &&
          (data.length > 0 ? (
            <ul>
              {data.map(({ title, id }) => {
                return (
                  <li key={id}>
                    <Link state={{ from: location }} to={`/movies/${id}`}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No movies with this title 😢</p>
          ))}
      </div>
    </main>
  );
};

export default Movies;
