import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastList } from 'components/utils';
import { List } from './Cast.styled';
const Cast = () => {
  const [cast, setCast] = useState(null);

  const { id } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    getCastList(id).then(res => {
      setCast(res.cast.slice(0, 10));
    });
  }, [id]);

  return (
    <>
      {cast && (
        <List>
          {cast.map(({ cast_id, name, character, profile_path }) => {
            return (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `${imgUrl}${profile_path}`
                      : `https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png`
                  }
                  alt="text"
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Cast;
