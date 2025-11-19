import TitleBar from "@shared/components/title-bar/title-bar";

import * as styles from "./info.css";

interface InfoProps {
  name: string;
  company: string;
  droneNumber: number;
}

const Info = ({ name, company, droneNumber }: InfoProps) => {
  return (
    <div>
      <TitleBar>MY_PAGE</TitleBar>
      <section className={styles.infoContainer}>
        <div className={styles.sectionContainer}>
          <img className={styles.image} src="/test_profile.png" />
          <div className={styles.titleContentsContainer}>
            <p className={styles.contents}>이름: {name}</p>
            <p className={styles.contents}>회사: {company}</p>
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
    </div>
  );
};

export default Info;
