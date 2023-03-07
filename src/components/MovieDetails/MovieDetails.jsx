import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieData } from 'components/utils';
import {
  Container,
  GoBack,
  Genres,
  Additional,
  AdditionalLink,
  ListBtn,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieData(id).then(res => {
      setMovie(res);
    });
  }, [id]);

  const location = useLocation();

  const lastPage = location.state?.from ?? '/';

  return (
    <main>
      <GoBack to={lastPage} state={{ from: location }}>
        {' '}
        &#8592; Go back
      </GoBack>
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
            <ListBtn>
              <li>
                <AdditionalLink to="cast" state={{ from: lastPage }}>
                  Cast
                </AdditionalLink>
              </li>
              <li>
                <AdditionalLink to="reviews" state={{ from: lastPage }}>
                  Reviews
                </AdditionalLink>
              </li>
            </ListBtn>

            <Outlet />
          </Additional>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
