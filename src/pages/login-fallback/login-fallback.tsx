import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { useLocation } from "react-router";

import loadingAnimation from "@shared/assets/drone_loading_animation.json";

import { useSocialLogin } from "./hooks/use-social-login";

import * as styles from "./login-fallback.css";

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

    if (code && !hasProcessed.current) {
      hasProcessed.current = true;
      kakaoLogin(code).catch(() => {
        throw new Error("로그인에 실패하였습니다.");
      });
    }
  }, [location.search, kakaoLogin]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Lottie
          loop
          autoPlay
          animationData={loadingAnimation}
          style={{ width: "35rem", height: "35rem" }}
        />
        <div className={styles.textContainer}>
          <p className={styles.text}>카카오 로그인 처리 중이에요.</p>
          <p className={styles.text}>잠시만 기다려주세요 !</p>
        </div>
      </div>
    </div>
  );
};

export default LoginCallback;
