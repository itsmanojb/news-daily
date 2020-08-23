import axios from 'axios';
import isDev from './environment';

const getBaseURL = () => {

  const proxyURL = 'https://cors-anywhere.herokuapp.com/';
  const baseURL = 'https://newsapi.org/v2/';

  let url = isDev() ? baseURL : `${proxyURL}${baseURL}`;
  return url;

}

const client = axios.create({
  baseURL: getBaseURL(),
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