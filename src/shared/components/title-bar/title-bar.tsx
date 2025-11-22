import * as styles from "./title-bar.css";

interface TitleBarProps {
  children: string;
}

const TitleBar = ({ children }: TitleBarProps) => {
  return <div className={styles.titleBar}>{children}</div>;
};

export default TitleBar;
