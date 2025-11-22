import { useCallback } from "react";
import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import { END_POINT } from "@shared/apis/config/end-point";
import { instance } from "@shared/apis/instance";
import { tokenService } from "@shared/auth/token-service";

interface KakaoResponse {
  accessToken: string;
  refreshToken: string;
}

export const useSocialLogin = () => {
  const navigate = useNavigate();

  const kakaoLogin = useCallback(
    async (code: string) => {
      if (!code) {
        throw new Error("코드가 존재하지 않습니다.");
      }

      try {
        const response = await instance.get<KakaoResponse>(END_POINT.LOGIN, {
          params: { code },
        });

        const { accessToken, refreshToken } = response.data;

        if (!accessToken || !refreshToken) {
          throw new Error("토큰이 응답에 없습니다.");
        }

        tokenService.saveAccessToken(accessToken);
        tokenService.saveRefreshToken(refreshToken);

        window.dispatchEvent(new Event("storage"));
        window.dispatchEvent(new Event("loginStatusChanged"));

        navigate(routePath.ROOT);
      } catch (error) {
        alert("카카오 로그인에 실패하였습니다.");
        throw error;
      }
    },
    [navigate],
  );

  return { kakaoLogin };
};
