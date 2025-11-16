import * as styles from "./footer.css";

const Footer = () => {
  return (
    <div id="introduce" className={styles.footerContainer}>
      <div className={styles.topContainer}>
        <div className={styles.divideContainer}>
          <div className={styles.sectionContainer}>
            <p className={styles.title}>CONTACT</p>
            <p className={styles.contents}>GitHub: github.com/team-gyeol</p>
          </div>
          <div className={styles.sectionContainer}>
            <p className={styles.title}>TEAM: SAFECODE</p>
            <p className={styles.contents}>박인영(AI): 010-2469-6704</p>
            <p className={styles.contents}>박용진(BE): 010-9876-5432</p>
            <p className={styles.contents}>조혜린(FE): 010-4177-8703</p>
          </div>
        </div>
        <div className={styles.divideContainer}>
          <div className={styles.sectionContainer}>
            <p className={styles.title}>MYONGJI UNIVERSITY · CAPSTONE DESIGN</p>
            <p className={styles.contents}>PROJECT : GYEOL</p>
            <p className={styles.contents}>PERIOD : 2025.09 ~ 2024.12</p>
            <p className={styles.contents}>ADVISOR : 유철우 교수님</p>
            <p className={styles.contents}>SUBJECT : 캡스톤 디자인</p>
          </div>
        </div>
        <div className={styles.divideContainer}>
          <div className={styles.sectionContainer}>
            <p className={styles.contents}>ABOUT</p>
            <p className={styles.contents}>TEAM</p>
            <p className={styles.contents}>INTRODUCE</p>
          </div>
        </div>
      </div>
      <div className={styles.safecodeBottomContainer}>
        <p className={styles.contents}>
          © 2025 SAFECODE. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
