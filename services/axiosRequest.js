import axios from 'axios';
//import router from '../router';

//const URL_BASE = `${process.env.VUE_APP_URL_BASE_BOLSA}`;
const URL_BASE = 'http://localhost:20001/';

//const errosTratados = [400, 401, 404, 500];

const axiosRequest = axios.create({
  baseURL: URL_BASE,
});

axiosRequest.interceptors.request.use((request) => {
  // eslint-disable-next-line
  // request.headers.common.LG_ORIGEM_NOVO_AUTOATENDIMENTO = true;
  // request.headers.post['Content-Type'] ='application/json;charset=utf-8';
  // request.headers.post['Access-Control-Allow-Origin'] = '*';
  // request.headers.post['Access-Control-Allow-Methods'] = 'DELETE, POST, GET, OPTIONS';
  // request.headers.post['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';
  // request.headers.post['X-Permitted-Cross-Domain-Policies'] = 'none';
  // request.headers.post['Referrer-Policy'] = 'no-referrer';
  // request.headers.post['X-Frame-Options'] = 'SAMEORIGIN';
  // request.headers.post['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';
  request.params = request.params || {};
  request.params['_ts'] = new Date().getTime();

  // request.header.Add("Access-Control-Allow-Origin", "*")
  // request.header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  // request.header.Add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

  // eslint-disable-next-line
  //request.params = request.params || {};

  // eslint-disable-next-line
  //request.params['_ts'] = new Date().getTime();

  return request;
});

// axiosRequest.interceptors.response.use((response) => response,
//   (error) => {
//     if ((error.request.status === 400 || error.request.status === 401)
//          && error.response.headers.location !== undefined) {
//       window.location = error.response.headers.location;
//     } else if (errosTratados.includes(error.request.status)) {
//       //router.replace(`/${error.request.status}`);
//     } else {
//       //router.replace('500');
//     }
//     return error;
//   });

export default axiosRequest;

export { URL_BASE };
