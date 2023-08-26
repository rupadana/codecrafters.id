import api from '../configs/api';
import AppConfig from '../configs/app';
import ApiErrorHandler from '../libs/api-error-handler';
import ResponseModel from '../models/response-model';
import TagModel from '../models/tag-model';

export default class TagRepository {
  async getTags(): Promise<ResponseModel<TagModel[]>> {
    try {
      const response = await api().get('tags');

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }
}
