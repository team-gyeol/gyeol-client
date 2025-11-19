import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { END_POINT } from "../config/end-point";
import { instance } from "../instance";
import { queryKey } from "../query-key";
import type { ImageAnalyzeRequest, ImageAnalyzeResponse } from "../types/image";
import type {
  ImageListParams,
  ImageListResponse,
  ImageResponse,
} from "../types/my";

/**
 * 이미지 분석 API
 */
const analyzeImage = async (
  request: ImageAnalyzeRequest,
): Promise<ImageAnalyzeResponse> => {
  const formData = new FormData();
  formData.append("image", request.image);

  const response = await instance.post<ImageAnalyzeResponse>(
    END_POINT.IMAGE_ANALYZE,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};

export const useAnalyzeImage = () => {
  return useMutation({
    mutationKey: [queryKey.ANALYZE_IMAGE],
    mutationFn: analyzeImage,
  });
};

/**
 *
 * 분석한 이미지 조회
 */
const getImage = async (): Promise<ImageResponse> => {
  const response = await instance.get<ImageResponse>(END_POINT.IMAGE);
  return response.data;
};
export const useGetImage = () => {
  return useSuspenseQuery({
    queryKey: [queryKey.GET_IMAGE],
    queryFn: getImage,
  });
};

/**
 *
 * 분석한 이미지 목록 조회 (페이지네이션)
 */
const getImageList = async (
  params: ImageListParams = {},
): Promise<ImageListResponse> => {
  const { page = 1, size = 10 } = params;
  const response = await instance.get<ImageListResponse>(END_POINT.IMAGE_LIST, {
    params: { page, size },
  });
  return response.data;
};

export const useGetImageList = (params: ImageListParams = {}) => {
  return useQuery({
    queryKey: [queryKey.GET_IMAGE_LIST, params],
    queryFn: () => getImageList(params),
  });
};
