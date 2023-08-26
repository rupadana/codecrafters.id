import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import { BlogModel } from '../models/blog-model';

export const lastestBlogDataState: RecoilState<BlogModel> = atom({
  key: `servicesData/${v4()}`,
  default: {} as BlogModel
});
