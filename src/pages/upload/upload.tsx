import { useState } from "react";

import {
  useAnalyzeImage,
  useAnalyzeMultipleImages,
} from "@shared/apis/domain/image";

import * as styles from "./upload.css";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isMultipleMode, setIsMultipleMode] = useState(false);
  const {
    mutate: analyzeImage,
    isPending: isAnalyzingSingle,
    data: singleAnalysisResult,
  } = useAnalyzeImage();
  const {
    mutate: analyzeMultipleImages,
    isPending: isAnalyzingMultiple,
    data: multipleAnalysisResults,
  } = useAnalyzeMultipleImages();

  const isPending = isAnalyzingSingle || isAnalyzingMultiple;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    // 이미지 파일만 필터링
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length !== files.length) {
      alert("이미지 파일만 업로드 가능합니다.");
    }

    if (imageFiles.length === 0) return;

    setSelectedFiles(imageFiles);

    // 미리보기 URL 생성
    const readers = imageFiles.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((urls) => {
      setPreviewUrls(urls);
    });
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert("파일을 선택해주세요.");
      return;
    }

    if (isMultipleMode && selectedFiles.length > 1) {
      // 여러 장 분석
      analyzeMultipleImages(
        { images: selectedFiles },
        {
          onError: (error) => {
            console.error("이미지 분석 실패:", error);
            alert("이미지 분석에 실패했습니다.");
          },
        },
      );
    } else {
      // 단일 이미지 분석
      analyzeImage(
        { image: selectedFiles[0] },
        {
          onError: (error) => {
            console.error("이미지 분석 실패:", error);
            alert("이미지 분석에 실패했습니다.");
          },
        },
      );
    }
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setPreviewUrls([]);
  };

  const handleModeToggle = () => {
    setIsMultipleMode(!isMultipleMode);
    handleReset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이미지 분석</h1>

      <div className={styles.modeToggle}>
        <button
          className={styles.modeButton({ isActive: !isMultipleMode })}
          onClick={() => {
            if (isMultipleMode) {
              handleModeToggle();
            }
          }}
        >
          단일 분석
        </button>
        <button
          className={styles.modeButton({ isActive: isMultipleMode })}
          onClick={() => {
            if (!isMultipleMode) {
              handleModeToggle();
            }
          }}
        >
          여러 장 분석
        </button>
      </div>

      <div className={styles.uploadSection}>
        <label htmlFor="file-input" className={styles.fileLabel}>
          {selectedFiles.length > 0
            ? `${selectedFiles.length}개 파일 선택됨`
            : "파일 선택"}
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          multiple={isMultipleMode}
          onChange={handleFileSelect}
          className={styles.fileInput}
        />

        {selectedFiles.length > 0 && (
          <div className={styles.fileInfo}>
            <p>선택된 파일: {selectedFiles.length}개</p>
            <p>
              총 크기:{" "}
              {(
                selectedFiles.reduce((sum, file) => sum + file.size, 0) / 1024
              ).toFixed(2)}{" "}
              KB
            </p>
          </div>
        )}

        {previewUrls.length > 0 && (
          <div className={styles.previewGrid}>
            {previewUrls.map((url, index) => (
              <div key={index} className={styles.previewItem}>
                <img
                  src={url}
                  alt={`미리보기 ${index + 1}`}
                  className={styles.preview}
                />
                <p className={styles.previewFileName}>
                  {selectedFiles[index]?.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.buttonGroup}>
          <button
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || isPending}
            className={styles.uploadButton}
          >
            {isPending ? "분석 중..." : "분석 시작"}
          </button>
          {selectedFiles.length > 0 && (
            <button onClick={handleReset} className={styles.resetButton}>
              초기화
            </button>
          )}
        </div>
      </div>

      {/* 단일 이미지 분석 결과 */}
      {singleAnalysisResult && !isMultipleMode && (
        <div className={styles.resultSection}>
          <h2 className={styles.resultTitle}>분석 결과</h2>
          <div className={styles.resultGrid}>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>멀티콥터 본체:</span>
              <span className={styles.resultValue}>
                {singleAnalysisResult.multicopterBodyCount}개
              </span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>프로펠러:</span>
              <span className={styles.resultValue}>
                {singleAnalysisResult.propellerCount}개
              </span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>카메라:</span>
              <span className={styles.resultValue}>
                {singleAnalysisResult.cameraCount}개
              </span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>다리:</span>
              <span className={styles.resultValue}>
                {singleAnalysisResult.legCount}개
              </span>
            </div>
          </div>
          <div className={styles.analysisText}>
            <p>{singleAnalysisResult.analysisResult}</p>
          </div>
          {singleAnalysisResult.segmentedImageUrl && (
            <div className={styles.segmentedImageContainer}>
              <h3 className={styles.segmentedTitle}>분할된 이미지</h3>
              <img
                src={singleAnalysisResult.segmentedImageUrl}
                alt="분할된 이미지"
                className={styles.segmentedImage}
              />
            </div>
          )}
        </div>
      )}

      {/* 여러 장 이미지 분석 결과 */}
      {multipleAnalysisResults && isMultipleMode && (
        <div className={styles.multipleResultsSection}>
          <h2 className={styles.resultTitle}>
            분석 결과 ({multipleAnalysisResults.results.length}개)
          </h2>
          {multipleAnalysisResults.results.map((result, index) => (
            <div key={index} className={styles.resultCard}>
              <h3 className={styles.resultCardTitle}>이미지 {index + 1}</h3>
              <div className={styles.resultGrid}>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>멀티콥터 본체:</span>
                  <span className={styles.resultValue}>
                    {result.multicopterBodyCount}개
                  </span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>프로펠러:</span>
                  <span className={styles.resultValue}>
                    {result.propellerCount}개
                  </span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>카메라:</span>
                  <span className={styles.resultValue}>
                    {result.cameraCount}개
                  </span>
                </div>
                <div className={styles.resultItem}>
                  <span className={styles.resultLabel}>다리:</span>
                  <span className={styles.resultValue}>
                    {result.legCount}개
                  </span>
                </div>
              </div>
              <div className={styles.analysisText}>
                <p>{result.analysisResult}</p>
              </div>
              {result.segmentedImageUrl && (
                <div className={styles.segmentedImageContainer}>
                  <h4 className={styles.segmentedTitle}>분할된 이미지</h4>
                  <img
                    src={result.segmentedImageUrl}
                    alt={`분할된 이미지 ${index + 1}`}
                    className={styles.segmentedImage}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upload;
