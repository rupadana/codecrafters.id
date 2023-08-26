import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import { BlogModel } from '../models/blog-model';

export const blogDataState: RecoilState<BlogModel> = atom({
  key: `blogData/${v4()}`,
  default: {} as BlogModel
});
