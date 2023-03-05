import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieData } from 'components/utils';
export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    getMovieData(id).then(res => {
      setMovie(res);
    });
  }, [id]);

  console.log(movie);
  return (
    <main>
      <button> &#8592; Go back</button>
      {movie && (
        <div>
          <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title}></img>
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>
            {movie &&
              movie.genres.map(gen => {
                return <span key={gen.id}>{gen.name}</span>;
              })}
          </p>
        </div>
      )}
    </main>
  );
};
