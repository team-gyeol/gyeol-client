import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteImage, useGetImageList } from "@shared/apis/domain/image";
import TitleBar from "@shared/components/title-bar/title-bar";

import History from "../history/history";
import ImageGallery from "../image-gallery/image-gallery";

import * as styles from "./history-list.css";

const HistoryList = () => {
  const [selectedHistoryId, setSelectedHistoryId] = useState<number | null>(
    null,
  );
  const queryClient = useQueryClient();
  const { data: imageListData, isLoading } = useGetImageList({
    page: 1,
    size: 10,
  });
  const { mutate: deleteImage } = useDeleteImage();

  const handleHistoryClick = (imageId: number) => {
    setSelectedHistoryId(imageId);
  };

  const handleCloseGallery = () => {
    setSelectedHistoryId(null);
  };

  const handleDelete = (imageId: number) => {
    if (window.confirm("정말로 이 이미지를 삭제하시겠습니까?")) {
      deleteImage(imageId, {
        onSuccess: () => {
          // 이미지 목록 쿼리 무효화하여 새로고침
          queryClient.invalidateQueries({
            queryKey: ["getImageList"],
          });
          // 갤러리가 열려있고 삭제한 이미지가 선택된 이미지라면 닫기
          if (selectedHistoryId === imageId) {
            setSelectedHistoryId(null);
          }
        },
        onError: () => {
          alert("이미지 삭제에 실패했습니다.");
        },
      });
    }
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
            onDelete={() => handleDelete(image.id)}
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
