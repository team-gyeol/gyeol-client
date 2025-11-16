import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import * as styles from "./header.css";

interface HeaderProps {
  darkMode: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <header className={styles.headerContainer({ darkMode })}>
      <div className={styles.textContainer}>
        <button
          className={styles.text}
          onClick={() => handleNavigate(routePath.ROOT)}
        >
          LOGO
        </button>
        <button className={styles.text}>ABOUT</button>
        <button className={styles.text}>TEAM</button>
        <button className={styles.text}>INTRODUCE</button>
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
