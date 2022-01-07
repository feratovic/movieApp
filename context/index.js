import React, {createContext, useState} from 'react';
import {mdbApi, mdbApiKey, singleMovieApi} from '../data/configs';

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

    if ((data.genre && data.genre.length > 0) || data.mood) {
      const movie_genres = [data.mood.value];
      if (data.genre && data.genre.length > 0) {
        data.genre.forEach((item) => {
          movie_genres.push(item.value);
        });
      }

      temp += `with_genres=${movie_genres}&`;
    }

    if (data.rating) temp += `vote_average.gte=${data.rating.value}&`;
    if (data.year) temp += `year=${data.year.value}&`;

    temp = `${mdbApi()}${temp}page=${
      page || page !== 0 ? page : 1
    }&include_adult=false`;

    axios.get(temp).then((res) => {
      if (res.status === 200 && res.data.results && res.data.results[0]) {
        const random = Math.random() * (res.data.results.length - 1);
        const random_page =
          Math.random() *
          (res.data.total_pages >= 500 ? 500 : res.data.total_pages - 1);
        setPage(Math.ceil(random_page));
        const temp_movie = res.data.results[Math.ceil(random)];

        const single_url = `${singleMovieApi()}/${
          temp_movie.id
        }?api_key=${mdbApiKey()}`;

        axios.get(single_url).then((res) => {
          setMovie(res.data || {});
        });
      }
    });
  };

  const luckyBtn = async (bool) => {
    const random = Math.random() * 719971;
    const single_url = `${singleMovieApi()}/${Math.ceil(
      random
    )}?api_key=${mdbApiKey()}`;

    let apiRes = null;

    try {
      apiRes = await axios.get(single_url);
      console.log(apiRes);

      if (apiRes && apiRes.data) {
        setMovie(apiRes.data || {});
        setForm({...form, submit: true});
      }
    } catch (err) {
      luckyBtn(true);
    }
  };

  return (
    <PublicContext.Provider
      value={{
        form,
        movie,
        callMovieApi: callMovieApi,
        setForm: setForm,
        setMovie: setMovie,
        luckyBtn: luckyBtn,
      }}
    >
      {props.children}
    </PublicContext.Provider>
  );
}

export default PublicContextProvider;
