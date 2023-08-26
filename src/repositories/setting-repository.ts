import api from '../configs/api';
import AppConfig from '../configs/app';
import ApiErrorHandler from '../libs/api-error-handler';
import ResponseModel from '../models/response-model';
import SettingModel from '../models/setting-model';

export default class SettingRepository {
  async getSettings(): Promise<ResponseModel<SettingModel[]>> {
    try {
      const response = await api().get('settings');

      if (response.status === AppConfig.HTTP_OK) {
        return response.data;
      }

      throw ApiErrorHandler.notResponse200Handler(response);
    } catch (error) {
      throw ApiErrorHandler.errorHandler(error);
    }
  }
}
