import * as styles from "./history.css";

interface HistoryProps {
  date: string;
  title: string;
  description: string;
}

const History = ({ date, title, description }: HistoryProps) => {
  return (
    <li className={styles.historyContainer}>
      <div className={styles.leftContentsContiner}>
        <img className={styles.image} />
        <div className={styles.contentsContiner}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <p className={styles.text}>{date}</p>
      </div>
    </li>
  );
};

export default History;
