import axios from 'axios';
import AppConfig from './app';

type ApiParams = {
  activeUrl?: string | null;
  isMultipart?: boolean;
};

const apiBaseUrl = process.env.API_BASE_URL;

function Api(params?: ApiParams) {
  const api = axios.create({
    baseURL: `${params?.activeUrl ? '' : AppConfig.API_BASE_URL + 'api/'}`,
    headers: {
      'Content-Type': params?.isMultipart ? 'multipart/form-data' : 'application/json',
      Accept: 'application/json'
    },
    timeout: 10000,
    validateStatus: (status) => status >= 200 && status <= 500
  });

  return api;
}

export default Api;
