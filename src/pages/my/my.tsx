import Layout from "@shared/components/layout/layout";

import Aside from "./components/aside/aside";
import HistoryList from "./components/history-list/history-list";
import Info from "./components/info/info";

import * as styles from "./my.css";

const My = () => {
  return (
    <Layout>
      <div className={styles.myAllContainer}>
        <Aside />
        <div className={styles.infoHistoryContainer}>
          <Info name="조혜린" company="명지대학교" droneNumber={23} />
          <HistoryList />
        </div>
      </div>
    </Layout>
  );
};

export default My;
