import { useMutation } from "@tanstack/react-query";

import { END_POINT } from "../config/end-point";
import { instance } from "../instance";
import { queryKey } from "../query-key";
import type { ImageAnalyzeRequest, ImageAnalyzeResponse } from "../types/image";

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

