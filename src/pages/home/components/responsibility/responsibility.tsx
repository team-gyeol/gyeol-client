import { forwardRef } from "react";

import * as styles from "./responsibility.css";

const Responsibility = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="about" className={styles.container} ref={ref}>
      <div className={styles.textContainer}>
        <p className={styles.text}>부품 판별 시간을 저장을 통한</p>
        <p className={styles.text}>책임 소재 분명화</p>
      </div>
      <div>
        <img src="/mac_book.png" className={styles.image} />
      </div>
    </section>
  );
});
export default Responsibility;
