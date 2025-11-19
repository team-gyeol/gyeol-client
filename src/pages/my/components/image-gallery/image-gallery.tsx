import { useState } from "react";

import type { ImageResponse } from "@shared/apis/types/my";

import * as styles from "./image-gallery.css";

interface ImageGalleryProps {
  images: ImageResponse[];
  selectedImageId: number;
  onClose: () => void;
}

const ImageGallery = ({
  images,
  selectedImageId,
  onClose,
}: ImageGalleryProps) => {
  const currentIndex = images.findIndex((img) => img.id === selectedImageId);
  const [currentIdx, setCurrentIdx] = useState(
    currentIndex >= 0 ? currentIndex : 0,
  );

  const currentImage = images[currentIdx];

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < images.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  if (!currentImage) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.galleryContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.imageContainer}>
          {currentIdx > 0 && (
            <button
              className={styles.navButton}
              onClick={handlePrevious}
              style={{ left: "1rem" }}
            >
              ‹
            </button>
          )}
          <img
            src={currentImage.originalImageUrl}
            alt="원본 이미지"
            className={styles.mainImage}
          />
          {currentImage.segmentedImageUrl && (
            <img
              src={currentImage.segmentedImageUrl}
              alt="분할된 이미지"
              className={styles.segmentedImage}
            />
          )}
          {currentIdx < images.length - 1 && (
            <button
              className={styles.navButton}
              onClick={handleNext}
              style={{ right: "1rem" }}
            >
              ›
            </button>
          )}
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.analysisText}>
            {currentImage.analysisResult}
          </p>
          <p className={styles.dateText}>
            {new Date(currentImage.createdAt).toLocaleString("ko-KR")}
          </p>
          <div className={styles.imageCounter}>
            {currentIdx + 1} / {images.length}
          </div>
        </div>
        {images.length > 1 && (
          <div className={styles.thumbnailContainer}>
            {images.map((image, idx) => (
              <img
                key={image.id}
                src={image.originalImageUrl}
                alt={`썸네일 ${idx + 1}`}
                className={styles.thumbnail({
                  isActive: idx === currentIdx,
                })}
                onClick={() => setCurrentIdx(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;

