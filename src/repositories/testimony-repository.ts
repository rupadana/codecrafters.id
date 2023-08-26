import api from '../configs/api';
import AppConfig from '../configs/app';
import ApiErrorHandler from '../libs/api-error-handler';
import ResponseModel from '../models/response-model';
import TestimonyModel from '../models/testimony-model';

export default class TestimonyRepository {
  async getTestimonies(): Promise<ResponseModel<TestimonyModel[]>> {
    try {
      const response = await api().get('testimonies');

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }
}
