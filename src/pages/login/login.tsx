//login.tsx
import { routePath } from "@router/path";
import { useNavigate } from "react-router";

import KakaoLoginButton from "./kakao-login-button/kakao-login-button";

import * as styles from "./login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginSection}>
        <div className={styles.textContainer}>
          <p className={styles.title}>GYEOL 서비스에 오신 것을</p>
          <p className={styles.title}>환영합니다</p>
        </div>
        <div>
          <KakaoLoginButton buttonText="카카오 로그인하기" />
          <div className={styles.button}>
            <button onClick={() => navigate(routePath.ROOT)}>
              홈페이지로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
