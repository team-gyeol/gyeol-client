import { forwardRef } from "react";

import * as styles from "./accuracy.css";

const Accuracy = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <div>
        <img src="/drone_result1.png" className={styles.image} />
        <img src="/drone_result2.png" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>평균 95퍼센트 일치율의</p>
        <p className={styles.secondTitletext}>높은 정확도</p>
      </div>
    </section>
  );
});

export default Accuracy;
