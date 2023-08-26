import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import ServiceModel from '../models/service-model';

const initialServiceData: ServiceModel[] = []; // Initial data of ServiceModel type

export const servicesDataState: RecoilState<ServiceModel[]> = atom({
  key: `servicesData/${v4()}`,
  default: initialServiceData
});
