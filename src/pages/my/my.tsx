import { useState } from "react";

import { useGetUser } from "@shared/apis/domain/my";
import Layout from "@shared/components/layout/layout";

import Aside, { ID, type SelectedId } from "./components/aside/aside";
import HistoryList from "./components/history-list/history-list";
import Info from "./components/info/info";

import * as styles from "./my.css";

const My = () => {
  const { data: userData } = useGetUser();
  const [selectedId, setSelectedId] = useState<SelectedId>(ID.MY_INFO);

  return (
    <Layout>
      <div className={styles.myAllContainer}>
        <Aside selectedId={selectedId} onSelect={setSelectedId} />
        <div className={styles.infoHistoryContainer}>
          {selectedId === ID.MY_INFO && (
            <Info
              name={userData.userName}
              email={userData.userEmail}
              droneNumber={23}
            />
          )}
          {selectedId === ID.DRONE_HISTORY && <HistoryList />}
        </div>
      </div>
    </Layout>
  );
};

export default My;
