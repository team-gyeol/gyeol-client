import * as styles from "./history.css";

interface HistoryProps {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

const History = ({
  date,
  title,
  description,
  imageUrl,
  onClick,
}: HistoryProps) => {
  return (
    <li
      className={styles.historyContainer}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className={styles.leftContentsContiner}>
        {imageUrl && (
          <img src={imageUrl} alt={title} className={styles.image} />
        )}
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
