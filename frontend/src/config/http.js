const getBaseUrl = () => {
  let url;
  switch (process.env.NODE_ENV) {
    case 'production':
      url = process.env.REACT_APP_API_ENDPOINT;
      break;
    case 'development':
    default:
      url = 'http://localhost:5000/';
  }

  return url;
};

export default getBaseUrl();
