export interface PaginationModel<T> {
  current_page?: number;
  data?: T;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  links?: PaginationLinkModel[];
  next_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: null;
  to?: number;
  total?: number;
}

export interface PaginationLinkModel {
  url?: null | string;
  label: string;
  active: boolean;
}
