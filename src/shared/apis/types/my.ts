export interface UserResponse {
  userName: string;
  userEmail: string;
  userPicture: string;
}

export interface ImageResponse {
  id: number;
  originalImageUrl: string;
  segmentedImageUrl: string;
  analysisResult: string;
  createdAt: string;
}

export interface Pageable {
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface ImageListResponse {
  content: ImageResponse[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  empty: boolean;
}

export interface ImageListParams {
  page?: number;
  size?: number;
}
