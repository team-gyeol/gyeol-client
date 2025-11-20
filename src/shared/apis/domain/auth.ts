import { END_POINT } from "../config/end-point";
import { instance } from "../instance";
import type { RefreshTokenRequest, RefreshTokenResponse } from "../types/auth";

/**
 * 리프레시 토큰으로 액세스 토큰 재발급
 */
export const refreshAccessToken = async (
  request: RefreshTokenRequest,
): Promise<RefreshTokenResponse> => {
  const response = await instance.post<RefreshTokenResponse>(
    END_POINT.TOKEN_REFRESH,
    request,
  );

  return response.data;
};

