import React, {createContext, useState} from 'react';
export const PublicContext = createContext();

function PublicContextProvider(props) {
  const [form, setForm] = useState({
    genre: '',
    year: '',
    rating: '',
    mood: '',
    submit: false,
  });

  return (
    <PublicContext.Provider
      value={{
        form,
        setForm: setForm,
      }}
    >
      {props.children}
    </PublicContext.Provider>
  );
}

export default PublicContextProvider;
