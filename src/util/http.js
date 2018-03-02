import axios from 'axios';
import Cookie from 'js-cookie';

const http = axios.create({
  headers: {
    'content-type': 'application/json;charset=utf-8',
    'x-csrf-token': Cookie.get('csrfToken'),
  }
});

export default http;
