import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useDeleteImage, useGetImageList } from "@shared/apis/domain/image";
import Spinner from "@shared/components/spinner/spinner";
import TitleBar from "@shared/components/title-bar/title-bar";

import History from "../history/history";
import ImageGallery from "../image-gallery/image-gallery";

import * as styles from "./history-list.css";

const HistoryList = () => {
  const [selectedHistoryId, setSelectedHistoryId] = useState<number | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const queryClient = useQueryClient();
  const { data: imageListData, isLoading } = useGetImageList({
    page: currentPage,
    size: pageSize,
  });
  // 갤러리를 열 때 모든 이미지를 가져오기 위한 쿼리
  // totalElements를 먼저 확인한 후 그만큼 가져오기
  const totalElements = imageListData?.totalElements ?? 0;
  const { data: allImagesData } = useGetImageList({
    page: 1,
    size: totalElements > 0 ? totalElements : 1000, // 실제 총 개수만큼 가져오기
  });
  const { mutate: deleteImage } = useDeleteImage();

  // 분석 결과의 영어를 한글로 변환
  const translateAnalysisResult = (text: string): string => {
    return text
      .replace(/\bcamera\b/gi, "카메라")
      .replace(/\bpropeller\b/gi, "프로펠러")
      .replace(/\bleg\b/gi, "다리")
      .replace(/\bmulticopter_body\b/gi, "몸체")
      .replace(/\bmulticopterBody\b/gi, "몸체");
  };

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
          // 현재 페이지에 아이템이 없고 첫 페이지가 아니면 이전 페이지로 이동
          if (
            imageListData &&
            imageListData.content.length === 1 &&
            currentPage > 1
          ) {
            setCurrentPage(currentPage - 1);
          }
        },
        onError: () => {
          alert("이미지 삭제에 실패했습니다.");
        },
      });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedHistoryId(null); // 페이지 변경 시 갤러리 닫기
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <section>
        <TitleBar>HISTORY</TitleBar>
        <div>
          <Spinner />
        </div>
      </section>
    );
  }

  if (!imageListData || imageListData.empty) {
    return (
      <section>
        <TitleBar>HISTORY</TitleBar>
        <div className={styles.emptyMessage}>분석한 이미지가 없습니다.</div>
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
            description={translateAnalysisResult(image.analysisResult)}
            imageUrl={image.originalImageUrl}
            onClick={() => handleHistoryClick(image.id)}
            onDelete={() => handleDelete(image.id)}
          />
        ))}
      </ul>

      {/* 페이지네이션 */}
      {imageListData.totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </button>
          <div className={styles.paginationNumbers}>
            {Array.from({ length: imageListData.totalPages }, (_, i) => i + 1)
              .filter((page) => {
                // 현재 페이지 주변 2페이지씩만 표시
                return (
                  page === 1 ||
                  page === imageListData.totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2)
                );
              })
              .map((page, index, array) => {
                // 생략 표시 추가
                const showEllipsis =
                  index > 0 && array[index - 1] !== page - 1;
                return (
                  <div key={page} className={styles.paginationGroup}>
                    {showEllipsis && (
                      <span className={styles.paginationEllipsis}>...</span>
                    )}
                    <button
                      className={styles.paginationNumberButton({
                        isActive: page === currentPage,
                      })}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </div>
                );
              })}
          </div>
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === imageListData.totalPages}
          >
            다음
          </button>
        </div>
      )}

      {selectedHistoryId && allImagesData && (
        <ImageGallery
          images={allImagesData.content}
          selectedImageId={selectedHistoryId}
          onClose={handleCloseGallery}
        />
      )}
    </section>
  );
};

export default HistoryList;
