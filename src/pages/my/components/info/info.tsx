import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import { logout } from "@shared/apis/domain/auth";
import { tokenService } from "@shared/auth/token-service";
import TitleBar from "@shared/components/title-bar/title-bar";

import * as styles from "./info.css";

interface InfoProps {
  name: string;
  email: string;
  droneNumber: number;
}

const Info = ({ name, email, droneNumber }: InfoProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (!confirm("로그아웃 하시겠습니까?")) {
      return;
    }

    try {
      await logout();
      tokenService.removeAccessToken();
      tokenService.removeRefreshToken();
      window.dispatchEvent(new Event("loginStatusChanged"));
      window.dispatchEvent(new Event("storage"));
      navigate(routePath.LOGIN);
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃에 실패했습니다.");
    }
  };

  return (
    <div>
      <TitleBar>MY_PAGE</TitleBar>
      <section className={styles.infoContainer}>
        <div className={styles.sectionContainer}>
          <img className={styles.image} src="/test_profile.png" />
          <div className={styles.titleContentsContainer}>
            <p className={styles.contents}>이름: {name}</p>
            <p className={styles.contents}>이메일: {email}</p>
          </div>
        </div>

        <div className={styles.verticalLine} />

        <div className={styles.titleContentsContainer}>
          <p className={styles.contents}>검사한 드론 갯수</p>
          <div className={styles.textContainer}>
            <p className={styles.highlight}>{droneNumber}</p>
            <p className={styles.contents}>개</p>
          </div>
        </div>
      </section>
      <div className={styles.logoutContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Info;
