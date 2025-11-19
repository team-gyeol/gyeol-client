import TitleBar from "@shared/components/title-bar/title-bar";

import History from "../history/history";

import * as styles from "./history-list.css";

const HistoryList = () => {
  return (
    <section>
      <TitleBar>HISTORY</TitleBar>
      <ul className={styles.historyListContainer}>
        <History
          date="2024.05.31"
          title="드론"
          description="드론을 날리면 난 드롭나? ㅋ"
        />
        <History
          date="2024.05.31"
          title="드론"
          description="드론을 날리면 난 드롭나? ㅋ"
        />
        <History
          date="2024.05.31"
          title="드론"
          description="드론을 날리면 난 드롭나? ㅋ"
        />
        <History
          date="2024.05.31"
          title="드론"
          description="드론을 날리면 난 드롭나? ㅋ"
        />
        <History
          date="2024.05.31"
          title="드론"
          description="드론을 날리면 난 드롭나? ㅋ"
        />
      </ul>
    </section>
  );
};

export default HistoryList;
