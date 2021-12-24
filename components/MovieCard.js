import {useContext} from 'react';
import {PublicContext} from '../context';

export default function MovieCard() {
  const {movie} = useContext(PublicContext);

  console.log(movie);
  return <div>Movie Card</div>;
}
