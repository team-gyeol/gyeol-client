import * as styles from "./history.css";

interface HistoryProps {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  onDelete?: (e: React.MouseEvent) => void;
}

const History = ({
  date,
  title,
  description,
  imageUrl,
  onClick,
  onDelete,
}: HistoryProps) => {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(e);
    }
  };

  return (
    <li
      className={styles.historyContainer({ isClickable: !!onClick })}
      onClick={onClick}
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
        {onDelete && (
          <button
            className={styles.deleteButton}
            onClick={handleDeleteClick}
            aria-label="삭제"
          >
            삭제
          </button>
        )}
      </div>
    </li>
  );
};

export default History;
