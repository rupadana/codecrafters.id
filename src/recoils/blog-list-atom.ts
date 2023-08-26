import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import { PaginationModel } from '../models/pagination-model';
import { BlogModel } from '../models/blog-model';

export const blogListDataState: RecoilState<PaginationModel<BlogModel[]>> = atom({
  key: `blogListData/${v4()}`,
  default: {} as PaginationModel<BlogModel[]>
});
