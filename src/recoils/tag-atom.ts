import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import TagModel from '../models/tag-model';

const initialTagData: TagModel[] = []; // Initial data of TagModel type

export const tagsDataState: RecoilState<TagModel[]> = atom({
  key: `tagsData/${v4()}`,
  default: initialTagData
});
