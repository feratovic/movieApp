import React, {createContext, useState} from 'react';
import {mdbApi} from '../data/configs';

import axios from 'axios';

export const PublicContext = createContext();

function PublicContextProvider(props) {
  const [form, setForm] = useState({
    genre: '',
    year: '',
    rating: '',
    mood: '',
    submit: false,
  });

  const [page, setPage] = useState(undefined);

  const [movie, setMovie] = useState(undefined);

  const callMovieApi = (data) => {
    let temp = '';

    if (data.genre && data.genre.length > 0)
      temp += `with_genres=${data.genre[0].value}&`;
    if (data.rating) temp += `vote_average.gte=${data.rating.value}&`;
    //if (data.mood) temp += data.mood.value;
    if (data.year) temp += `year=${data.year.value}&`;

    temp = `${mdbApi()}${temp}page=${page || page !== 0 ? page : 1}`;

    axios.get(temp).then((res) => {
      if (res.status === 200 && res.data.results && res.data.results[0]) {
        const random = Math.random() * (res.data.results.length - 1);
        const random_page =
          Math.random() *
          (res.data.total_pages >= 500 ? 500 : res.data.total_pages - 1);
        setPage(Math.ceil(random_page));
        setMovie(res.data.results[Math.ceil(random)]);
      }
    });
  };

  return (
    <PublicContext.Provider
      value={{
        form,
        movie,
        callMovieApi: callMovieApi,
        setForm: setForm,
        setMovie: setMovie,
      }}
    >
      {props.children}
    </PublicContext.Provider>
  );
}

export default PublicContextProvider;
