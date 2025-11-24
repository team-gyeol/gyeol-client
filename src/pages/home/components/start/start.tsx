import * as styles from "./start.css";

interface StartProps {
  onClick: () => void;
}

const Start = ({ onClick }: StartProps) => {
  return (
    <section id="start" className={styles.container}>
      <div className={styles.introduceContainer}>
        <div>
          <p className={styles.infoText}>welcome to gyeol</p>
          <p className={styles.firstTitleText}>Elevating Drone</p>
          <p className={styles.secondTitleText}>Reliability</p>
        </div>
      </div>
      <div className={styles.startContainer}>
        <p className={styles.startText}>드론의 신뢰성을 한 단계 높이다</p>
        <button className={styles.button} onClick={onClick}>
          GET START ▶︎
        </button>
      </div>
    </section>
  );
};

export default Start;
