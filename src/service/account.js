import http from '@/util/http';

const Account = {
  register(params) {
    return http.post('http://127.0.0.1:7001/account/register', params);
  },
  login(params) {
    return http.post('http://127.0.0.1:7001/account/login', params);
  },
  list(params) {
    return http.post('http://127.0.0.1:7001/account/list', params);
  },
};

export default Account;
