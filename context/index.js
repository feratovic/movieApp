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

  const [movie, setMovie] = useState(undefined);

  const callMovieApi = (data) => {
    console.log(mdbApi(), data);
    let temp = '';
    if (data.genre && data.genre.length > 0)
      temp += `with_genres=${data.genre[0].value}&`;
    if (data.rating) temp += `vote_average.gte=${data.rating.value}&`;
    //if (data.mood) temp += data.mood.value;
    if (data.year) temp += `year=${data.year.value}&`;

    temp = `${mdbApi()}${temp}`;

    axios.get(temp).then((res) => {
      if (res.status === 200 && res.data.results && res.data.results[0]) {
        setMovie(res.data.results[0]);
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
      }}
    >
      {props.children}
    </PublicContext.Provider>
  );
}

export default PublicContextProvider;
