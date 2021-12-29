import {useContext} from 'react';
import {PublicContext} from '../context';
import {imageApi} from '../data/configs';
import styles from '../styles/MovieCard.module.scss';
import {CustomBtn} from './Buttons';
import ImageProp from './ImageProp';
import data from '../data/data.json';
import {PlayIcon} from './Icons';

export default function MovieCard() {
  const {movie, form, callMovieApi, setForm, setMovie} =
    useContext(PublicContext);

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

  const generateGenre = (movie) => {
    let string = '';

    movie.genres.forEach((item, index) => {
      if (movie.genres.length - 1 === index) string += item.name;
      else string += item.name + ', ';
    });

    return string !== '' ? string : '/';
  };

  console.log(movie);

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
        <div id={styles.play_btn}>
          <PlayIcon id={styles.play_icon} width={30} />
        </div>
      </div>
      <div className={styles.content_container}>
        <h1>{movie && movie.original_title}</h1>
        <div className={styles.content}>
          <div>
            <span>GENRE</span>
            <br></br>
            {movie && generateGenre(movie)}
          </div>
          <div>
            <span>YEAR</span>
            <br></br>
            {movie && movie.release_date && movie.release_date.substr(0, 4)}
          </div>
          <div>
            <span>RATING</span>
            <br></br>
            {movie && movie.vote_average}
          </div>
          <div>
            <span>DURATION</span>
            <br></br>
            {movie && movie.runtime !== 0 ? movie.runtime : 0} min
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
