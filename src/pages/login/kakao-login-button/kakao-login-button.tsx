//kakao-login-button.tsx

import { appConfig } from "@shared/config/app-config";

import * as styles from "./kakao-login-button.css";

interface buttonTextProps {
  buttonText: string;
}

const KakaoLoginButton = ({ buttonText }: buttonTextProps) => {
  const handleKakaoLogin = () => {
    const redirectUri =
      window.location.hostname === "localhost"
        ? appConfig.auth.kakaoLocalRedirectUrl
        : appConfig.auth.kakaoProdRedirectUrl;

    const loginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = loginUrl;
  };
  return (
    <button className={styles.container} onClick={handleKakaoLogin}>
      {buttonText}
    </button>
  );
};

export default KakaoLoginButton;
