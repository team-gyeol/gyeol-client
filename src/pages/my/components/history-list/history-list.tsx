import { useState } from "react";

import { useGetImageList } from "@shared/apis/domain/image";
import TitleBar from "@shared/components/title-bar/title-bar";

import History from "../history/history";
import ImageGallery from "../image-gallery/image-gallery";

import * as styles from "./history-list.css";

const HistoryList = () => {
  const [selectedHistoryId, setSelectedHistoryId] = useState<number | null>(
    null,
  );
  const { data: imageListData, isLoading } = useGetImageList({
    page: 1,
    size: 10,
  });

  const handleHistoryClick = (imageId: number) => {
    setSelectedHistoryId(imageId);
  };

  const handleCloseGallery = () => {
    setSelectedHistoryId(null);
  };

  if (isLoading) {
    return (
      <section>
        <TitleBar>HISTORY</TitleBar>
        <div>로딩 중...</div>
      </section>
    );
  }

  if (!imageListData || imageListData.empty) {
    return (
      <section>
        <TitleBar>HISTORY</TitleBar>
        <div>분석한 이미지가 없습니다.</div>
      </section>
    );
  }

  return (
    <section>
      <TitleBar>HISTORY</TitleBar>
      <ul className={styles.historyListContainer}>
        {imageListData.content.map((image) => (
          <History
            key={image.id}
            date={new Date(image.createdAt).toLocaleDateString("ko-KR")}
            title="드론 분석"
            description={image.analysisResult}
            imageUrl={image.originalImageUrl}
            onClick={() => handleHistoryClick(image.id)}
          />
        ))}
      </ul>
      {selectedHistoryId && (
        <ImageGallery
          images={imageListData.content}
          selectedImageId={selectedHistoryId}
          onClose={handleCloseGallery}
        />
      )}
    </section>
  );
};

export default HistoryList;
