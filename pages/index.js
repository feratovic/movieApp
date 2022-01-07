import {useContext} from 'react';
import Form from '../components/Form';
import ImageProp from '../components/ImageProp';
import MovieCard from '../components/MovieCard';
import {PublicContext} from '../context';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';

export default function Home() {
  const {form, setForm} = useContext(PublicContext);

  return (
    <div id={styles.content}>
      <Head>
        <title>Movie app</title>
        <meta name="description" content="Random movie generator app" />
        <meta property="og:title" content="Random movie generator app" />
        <meta property="og:description" content="Random movie generator app" />
        <meta
          property="og:url"
          content="https://movie-app-neon-nu.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>
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
