import axios from 'axios';
import Config from '../config';

const {
  baseUri,
} = Config;

const get = (url, params, headers) => new Promise((resolve) => {
  axios.get(baseUri + url, { params, headers })
    .then(response => resolve(response))
    .catch(error => resolve(error.response));
});

const post = (url, body, headers) => new Promise((resolve) => {
  axios.post(baseUri + url, body, {
    headers,
  })
    .then(response => resolve(response))
    .catch(error => resolve(error.response));
});

const update = (url, body, headers) => new Promise((resolve) => {
  axios.put(baseUri + url, body, {
    headers,
  })
    .then(response => resolve(response))
    .catch(error => resolve(error.response));
});

const deleteCall = (url, headers) => new Promise((resolve) => {
  axios.delete(baseUri + url, {
    headers,
  })
    .then(response => resolve(response))
    .catch(error => resolve(error.response));
});

export default {
  get,
  post,
  update,
  deleteCall,
};
