import api from '../configs/api';
import AppConfig from '../configs/app';
import ApiErrorHandler from '../libs/api-error-handler';
import ResponseModel from '../models/response-model';
import ServiceModel from '../models/service-model';

export default class ServiceRepository {
  async getServices(): Promise<ResponseModel<ServiceModel[]>> {
    try {
      const response = await api().get('services');

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }
}
