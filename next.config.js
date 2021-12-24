module.exports = {
  reactStrictMode: true,
  env: {
    MDB_API_KEY: process.env.MDB_API_KEY,
    DEVELOPMENT_URL: process.env.DEVELOPMENT_URL,
    PRODUCTION_URL: process.env.PRODUCTION_URL,
    API_URL: process.env.API_URL,
  },
};
