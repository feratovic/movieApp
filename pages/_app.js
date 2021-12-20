import PublicContext from '../context';

import '../styles/globals.scss';

function MyApp({Component, pageProps}) {
  return (
    <PublicContext>
      <Component {...pageProps} />
    </PublicContext>
  );
}

export default MyApp;
