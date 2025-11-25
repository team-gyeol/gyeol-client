import { forwardRef } from "react";

import * as styles from "./team.css";

const Team = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="team" className={styles.teamContainer} ref={ref}>
      <div className={styles.infoContainer}>
        <img src="/inyong.png" className={styles.image} />
        <div className={styles.textContainer}>
          <p className={styles.englishName}>PARK INYEONG</p>
          <p className={styles.koreanName}>박인영</p>
          <p className={styles.role}>AI DEVELOPER</p>
          <p className={styles.role}>PROJECT MANAGER</p>
        </div>
      </div>
      <div>
        <div className={styles.infoMiddleContainer}>
          <div className={styles.textContainer}>
            <p className={styles.englishName}>PARK YONGJIN</p>
            <p className={styles.koreanName}>박용진</p>
            <p className={styles.role}>BACKEND DEVELOPER</p>
          </div>
          <img src="/yongJin.png" className={styles.image} />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <img src="/hyerin.png" className={styles.image} />
        <div className={styles.textContainer}>
          <p className={styles.englishName}>CHO HYERIN</p>
          <p className={styles.koreanName}>조혜린</p>
          <p className={styles.role}>FRONTEND DEVELOPER</p>
        </div>
      </div>
    </section>
  );
});

export default Team;
