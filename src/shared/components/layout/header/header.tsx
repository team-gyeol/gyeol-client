import { useEffect, useState } from "react";
import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import { tokenService } from "@shared/auth/token-service";

import * as styles from "./header.css";

interface HeaderProps {
  darkMode?: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const hasToken = tokenService.hasToken();
      setIsLoggedIn(hasToken);
    };

    checkLoginStatus();

    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    const interval = setInterval(checkLoginStatus, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <header className={styles.headerContainer({ darkMode })}>
      <div className={styles.textContainer}>
        <a
          href="#start"
          className={styles.logoLoginText}
          onClick={() => handleNavigate(routePath.ROOT)}
        >
          LOGO
        </a>
        <a
          href="#about"
          className={styles.text}
          onClick={() => handleNavigate(routePath.ROOT)}
        >
          ABOUT
        </a>
        <a
          href="#team"
          className={styles.text}
          onClick={() => handleNavigate(routePath.ROOT)}
        >
          TEAM
        </a>
        <a
          href="#introduce"
          className={styles.text}
          onClick={() => handleNavigate(routePath.ROOT)}
        >
          INTRODUCE
        </a>
        <a
          className={`${styles.logoLoginText} ${styles.upload}`}
          onClick={() => handleNavigate(routePath.UPLOAD)}
        >
          UPLOAD
        </a>
      </div>
      <button
        className={styles.logoLoginText}
        onClick={() =>
          handleNavigate(isLoggedIn ? routePath.MY : routePath.LOGIN)
        }
      >
        {isLoggedIn ? "MY_PAGE" : "LOGIN"}
      </button>
    </header>
  );
};

export default Header;
