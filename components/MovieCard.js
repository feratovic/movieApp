import {useContext} from 'react';
import {PublicContext} from '../context';
import {imageApi} from '../data/configs';
import styles from '../styles/MovieCard.module.scss';
import {CustomBtn} from './Buttons';
import ImageProp from './ImageProp';

export default function MovieCard() {
  const {movie, form, callMovieApi, setForm, setMovie} =
    useContext(PublicContext);

  console.log(movie);

  const handleSubmit = (e) => {
    callMovieApi(form);
  };

  const handleNewMovie = (e) => {
    setForm({
      genre: '',
      year: '',
      rating: '',
      mood: '',
      submit: false,
    });
    setMovie(undefined);
  };

  return (
    <div className={styles.movie_container}>
      <div className={styles.image_container}>
        <ImageProp
          src={
            movie && movie.poster_path
              ? `${imageApi()}/${movie.poster_path}`
              : '/images/background.png'
          }
          alt="background image"
        />
      </div>
      <div className={styles.content_container}>
        <h1>{movie && movie.original_title}</h1>
        <div className={styles.content}>
          <div>
            <span>GENRE</span>
            <br></br>
            Action
          </div>
          <div>
            <span>YEAR</span>
            <br></br>
            2088
          </div>
          <div>
            <span>RATING</span>
            <br></br>
            10
          </div>
          <div>
            <span>DURATION</span>
            <br></br>
            147 min
          </div>
        </div>
        <p>{movie && movie.overview}</p>

        <p>
          Already saw? Want another suggestion? Generate again or search for a
          new one.
        </p>

        <div>
          <CustomBtn
            title="generate"
            onClick={(e) => handleSubmit(e)}
            className="primary-btn"
          />
          <CustomBtn
            title="new movie"
            onClick={(e) => handleNewMovie(e)}
            className="secondary-btn"
          />
        </div>
      </div>
    </div>
  );
}
