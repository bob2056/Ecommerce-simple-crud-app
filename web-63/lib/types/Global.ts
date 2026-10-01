export interface IImage {
  url: string
  path: string
  filename: string
  size: number,
  type: string
}

export interface IPagination {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}