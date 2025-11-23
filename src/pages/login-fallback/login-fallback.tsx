import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

import { useSocialLogin } from "./hooks/use-social-login";

export const LoginCallback = () => {
  const location = useLocation();
  const { kakaoLogin } = useSocialLogin();
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) {
      return;
    }

    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");

    if (code) {
      kakaoLogin(code).catch(() => {
        throw new Error("로그인에 실패하였습니다.");
      });
      hasProcessed.current = true;
    }
  }, [location.search, kakaoLogin]);

  return null;
};

export default LoginCallback;
