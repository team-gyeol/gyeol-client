import * as styles from "./aside.css";

export const ID = {
  MY_INFO: "my_info",
  DRONE_HISTORY: "drone_history",
} as const;

export type SelectedId = (typeof ID)[keyof typeof ID];

interface AsideProps {
  selectedId: SelectedId;
  onSelect: (id: SelectedId) => void;
}

const Aside = ({ selectedId, onSelect }: AsideProps) => {
  return (
    <aside className={styles.asideContainer}>
      <div className={styles.verticalLine} />
      <div>
        <p className={styles.asideTitle}>MY_PAGE</p>
        <ul className={styles.listContainer}>
          <li
            id={ID.MY_INFO}
            onClick={() => onSelect(ID.MY_INFO)}
            className={styles.list({ isClick: selectedId === ID.MY_INFO })}
          >
            나의 정보 조회
          </li>
          <li
            id={ID.DRONE_HISTORY}
            onClick={() => onSelect(ID.DRONE_HISTORY)}
            className={styles.list({
              isClick: selectedId === ID.DRONE_HISTORY,
            })}
          >
            드론 히스토리
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
