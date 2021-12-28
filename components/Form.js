import {useContext, useState} from 'react';
import styles from '../styles/Form.module.scss';
import {CustomDropdown} from './Inputs';
import data from '../data/data.json';
import {get100Years, get10Rating} from '../data';
import {CustomBtn} from './Buttons';
import {RefreshIcon} from './Icons';
import {PublicContext} from '../context';

export default function Form() {
  const [values, setValues] = useState({
    genre: [],
    year: '',
    rating: '',
    mood: '',
  });

  const {setForm, callMovieApi} = useContext(PublicContext);

  const [message, setMessage] = useState(undefined);

  const handleSubmit = (e) => {
    let val = 4;
    for (const property in values) {
      if (!values[property] || values[property].length === 0) {
        val--;
      }
    }

    if (val === 0) {
      setMessage('Fill at least one field.');
      return;
    } else {
      setForm({...values, submit: true});
      callMovieApi({...values, submit: true});
    }
  };

  const handleLucky = (e) => {};

  const handleChange = (e, name) => {
    setValues({...values, [name]: e});
  };

  const resetValues = (e) => {
    let temp = {
      genre: [],
      year: '',
      rating: '',
      mood: '',
    };

    setValues(temp);
    setForm({...temp, submit: false});
  };

  return (
    <div id={styles.form}>
      <CustomDropdown
        placeholder="Random"
        label="Gender"
        onChange={handleChange}
        value={values.genre}
        className={styles.input}
        options={data.genres}
        name="genre"
        classNamePrefix="react-select"
        isMulti={true}
      />

      <CustomDropdown
        placeholder="Random"
        label="Year"
        onChange={handleChange}
        value={values.year}
        className={styles.input}
        options={get100Years()}
        name="year"
        classNamePrefix="react-select"
        isMulti={false}
      />

      <div id={styles.form_block}>
        <CustomDropdown
          placeholder="Random"
          label="Rating"
          onChange={handleChange}
          value={values.rating}
          className={styles.input}
          id={styles.input_half}
          options={get10Rating()}
          name="rating"
          classNamePrefix="react-select"
          isMulti={false}
        />

        <CustomDropdown
          placeholder="Random"
          label="Mood"
          onChange={handleChange}
          value={values.mood}
          className={styles.input}
          id={styles.input_half}
          options={data.moods}
          name="mood"
          classNamePrefix="react-select"
          isMulti={false}
        />
      </div>

      <div id={styles.btn_container}>
        <CustomBtn
          title="generate"
          onClick={(e) => handleSubmit(e)}
          className="primary-btn"
        />

        <CustomBtn
          title="I am feeling lucky"
          onClick={(e) => handleLucky(e)}
          className="secondary-btn"
        />

        <button className="icon-btn" onClick={(e) => resetValues(e)}>
          <RefreshIcon fill="white" width="20" heigth="20" />
        </button>
      </div>
    </div>
  );
}
