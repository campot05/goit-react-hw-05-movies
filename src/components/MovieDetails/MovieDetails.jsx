import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieData } from 'components/utils';
import {
  Container,
  GoBack,
  Genres,
  Additional,
  AdditionalLink,
} from './MovieDetails.styled';

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
      <GoBack to="/"> &#8592; Go back</GoBack>
      {movie && (
        <>
          <Container>
            <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title}></img>
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie && (
                <Genres>
                  {movie.genres.map(gen => {
                    return <span key={gen.id}>{gen.name}</span>;
                  })}
                </Genres>
              )}
            </div>
          </Container>
          <hr />
          <Additional>
            <h3>Additional information</h3>
            <ul>
              <li>
                <AdditionalLink to="cast">Cast</AdditionalLink>
              </li>
              <li>
                <AdditionalLink to="reviews">Reviews</AdditionalLink>
              </li>
            </ul>
          </Additional>
          <Outlet />
        </>
      )}
    </main>
  );
};
