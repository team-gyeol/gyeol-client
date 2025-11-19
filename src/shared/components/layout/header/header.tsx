import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import * as styles from "./header.css";

interface HeaderProps {
  darkMode?: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <header className={styles.headerContainer({ darkMode })}>
      <div className={styles.textContainer}>
        <a
          href="#start"
          className={styles.text}
          onClick={() => handleNavigate(routePath.ROOT)}
        >
          LOGO
        </a>
        <a href="#about" className={styles.text}>
          ABOUT
        </a>
        <a href="#team" className={styles.text}>
          TEAM
        </a>
        <a href="#introduce" className={styles.text}>
          INTRODUCE
        </a>
      </div>
      <button
        className={styles.text}
        onClick={() => handleNavigate(routePath.LOGIN)}
      >
        LOGIN
      </button>
    </header>
  );
};

export default Header;
