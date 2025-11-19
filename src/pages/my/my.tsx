import { useGetUser } from "@shared/apis/domain/my";
import Layout from "@shared/components/layout/layout";

import Aside from "./components/aside/aside";
import HistoryList from "./components/history-list/history-list";
import Info from "./components/info/info";

import * as styles from "./my.css";

const My = () => {
  const { data: userData } = useGetUser();

  return (
    <Layout>
      <div className={styles.myAllContainer}>
        <Aside />
        <div className={styles.infoHistoryContainer}>
          <Info
            name={userData.userName}
            email={userData.userEmail}
            droneNumber={23}
          />
          <HistoryList />
        </div>
      </div>
    </Layout>
  );
};

export default My;
