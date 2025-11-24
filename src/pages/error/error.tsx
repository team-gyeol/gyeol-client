import * as styles from "./error.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>404</p>
      <p className={styles.contents}>잘못된 경로에요</p>
      <p className={styles.contents}>올바른 주소를 입력해주세요 !</p>
    </div>
  );
};

export default Error;
