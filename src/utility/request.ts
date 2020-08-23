import axios from 'axios';

const client = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    Authorization: process.env.REACT_APP_NEWSAPI_KEY
  }
});

const request = function (options: any) {
  const onSuccess = function (response: any) {
    return response.data;
  }

  const onError = function (error: any) {
    return Promise.reject(error.response || error.message);
  }

  return client(options).then(onSuccess).catch(onError);
}

export default request;