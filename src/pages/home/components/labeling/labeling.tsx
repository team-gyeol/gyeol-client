import { forwardRef } from "react";

import * as styles from "./labeling.css";

const Labeling = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <div>
        <p className={styles.text}>섬세한 라벨링으로</p>
        <p className={styles.text}>부품 분류를 정확하게</p>
      </div>
      <div>
        <img src="/drone1.png" className={styles.image} />
        <img src="/drone2.png" className={styles.image} />
      </div>
    </section>
  );
});

export default Labeling;
