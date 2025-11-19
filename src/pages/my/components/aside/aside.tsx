import { useState } from "react";

import * as styles from "./aside.css";

const ID = {
  MY_INFO: "my_info",
  DRON_HISTORY: "dron_history",
  INFO_PATCH: "info_patch",
};

const Aside = () => {
  const [selectedId, setSelectedId] = useState<string>("my_info");

  return (
    <aside className={styles.asideContainer}>
      <div className={styles.verticalLine} />
      <div>
        <p className={styles.asideTitle}>MY_PAGE</p>
        <ul className={styles.listContainer}>
          <li
            id={ID.MY_INFO}
            onClick={() => setSelectedId(ID.MY_INFO)}
            className={styles.list({ isClick: selectedId === ID.MY_INFO })}
          >
            나의 정보 조회
          </li>
          <li
            id={ID.DRON_HISTORY}
            onClick={() => setSelectedId(ID.DRON_HISTORY)}
            className={styles.list({ isClick: selectedId === ID.DRON_HISTORY })}
          >
            드론 히스토리
          </li>
          <li
            id={ID.INFO_PATCH}
            onClick={() => setSelectedId(ID.INFO_PATCH)}
            className={styles.list({ isClick: selectedId === ID.INFO_PATCH })}
          >
            정보 수정
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
