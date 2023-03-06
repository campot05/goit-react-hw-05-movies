import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieData } from 'components/utils';
import {
  Container,
  GoBack,
  Image,
  Title,
  Overview,
  Genres,
  Genre,
  Text,
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
        <Container>
          <Image
            src={`${imgUrl}${movie.poster_path}`}
            alt={movie.title}
          ></Image>
          <div>
            <Title>{movie.title}</Title>
            <Text>User Score: {Math.round(movie.vote_average * 10)}%</Text>
            <Overview>Overview</Overview>
            <Text>{movie.overview}</Text>
            <Text>
              <Genres>Genres</Genres>
              {movie &&
                movie.genres.map(gen => {
                  return <Genre key={gen.id}>{gen.name}</Genre>;
                })}
            </Text>
          </div>
        </Container>
      )}
    </main>
  );
};
