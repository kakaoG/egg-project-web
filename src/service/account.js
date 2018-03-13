import http from '@/util/http';
import * as api from '@/config/api';

const Account = {
  register (params) {
    return http.post(api.account.register, params)
      .then(({ status, data }) => ({ status, data }))
      .catch(({ response }) => ({ status: response.status, data: response.data }));
  },
  login (params) {
    return http.post(api.account.login, params)
      .then(({ status, data }) => ({ status, data }))
      .catch(({ response }) => ({ status: response.status, data: response.data }));
  },
  list (params) {
    return http.get(api.account.list, params)
      .then(({ status, data }) => ({ status, data }))
      .catch(({ response }) => ({ status: response.status, data: response.data }));
  }
};

export default Account
