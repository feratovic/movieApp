import {useContext} from 'react';
import Form from '../components/Form';
import ImageProp from '../components/ImageProp';
import MovieCard from '../components/MovieCard';
import {PublicContext} from '../context';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const {form, setForm} = useContext(PublicContext);

  return (
    <div id={styles.content}>
      <ImageProp src="/images/background.png" alt="background image" />
      <div className={styles.overflow}>
        {!form.submit ? (
          <>
            <div id={styles.text}>
              <h1>Let mi pick your next movie!</h1>
              <p>
                You do not know what to watch next? Well, I'm here to help.
                <br></br> <br></br> <span>I will find best match for you.</span>
              </p>
            </div>
            <div>
              <Form />
            </div>
          </>
        ) : (
          <MovieCard />
        )}
      </div>
    </div>
  );
}
