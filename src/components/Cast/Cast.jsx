import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastList } from 'components/utils';
export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    getCastList(id).then(res => {
      setCast(res.cast.slice(0, 10));
      console.log(res.cast);
    });
  }, [id]);
  console.log(cast);
  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ cast_id, name, character, profile_path }) => {
            return (
              <li key={cast_id}>
                {console.log(profile_path)}
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
        </ul>
      )}
    </>
  );
};
