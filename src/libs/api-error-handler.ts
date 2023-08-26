import axios, { AxiosResponse } from 'axios';
import AppConfig from '../configs/app';

export default class ApiErrorHandler {
  static errorHandler(error: any): Error {
    if (axios.isAxiosError(error)) {
      if (error.message === 'Network Error') {
        return new Error(AppConfig.CHECK_CONNECTION_MESSAGE);
      }
      return new Error(error.message);
    }

    if (error instanceof Error) {
      return error;
    }

    return new Error(AppConfig.ERROR_MESSAGE);
  }

  static notResponse200Handler(response: AxiosResponse): Error {
    if (response.status === AppConfig.HTTP_UNAUTHORIZED) {
      return new Error(AppConfig.UNAUTHORIZED_MESSAGE);
    }

    if (response.status === AppConfig.HTTP_TOO_MANY_REQUEST) {
      return new Error(AppConfig.TOO_MANY_REQUEST_MESSAGE);
    }

    if (
      response.status === AppConfig.HTTP_BAD_REQUEST ||
      response.status === AppConfig.HTTP_SERVER_ERROR ||
      response.status === AppConfig.HTTP_FORBIDDEN
    ) {
      return new Error(response?.data?.message ?? AppConfig.SERVER_ERROR_MESSAGE);
    }

    if (response.status === AppConfig.HTTP_NOT_FOUND) {
      return new Error(AppConfig.NOT_FOUND_MESSAGE);
    }

    return new Error(AppConfig.SERVER_ERROR_MESSAGE);
  }
}
