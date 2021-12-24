export const mdbApiKey = () => {
  return process.env.MDB_API_KEY;
};

export const mdbApi = () => {
  return `${process.env.API_URL}?api_key=${mdbApiKey()}&`;
};

export const placeholderImage = () => {
  return '/images/placeholder.png';
};

export const apiUrl = () => {
  if (process.env.NODE_ENV === 'development')
    return process.env.DEVELOPMENT_URL;
  else return process.env.PRODUCTION_URL;
};
