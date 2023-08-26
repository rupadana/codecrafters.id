import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import TestimonyModel from '../models/testimony-model';

const initialTestimonyData: TestimonyModel[] = []; // Initial data of TestimonyModel type

export const testimoniesDataState: RecoilState<TestimonyModel[]> = atom({
  key: `testimoniesData/${v4()}`,
  default: initialTestimonyData
});
