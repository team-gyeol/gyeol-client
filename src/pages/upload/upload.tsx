import { useState } from "react";

import { useAnalyzeImage } from "@shared/apis/domain/image";

import * as styles from "./upload.css";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const {
    mutate: analyzeImage,
    isPending,
    data: analysisResult,
  } = useAnalyzeImage();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    analyzeImage(
      { image: selectedFile },
      {
        onError: (error) => {
          console.error("이미지 분석 실패:", error);
          alert("이미지 분석에 실패했습니다.");
        },
      },
    );
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이미지 분석</h1>

      <div className={styles.uploadSection}>
        <label htmlFor="file-input" className={styles.fileLabel}>
          {selectedFile ? "파일 변경" : "파일 선택"}
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className={styles.fileInput}
        />

        {selectedFile && (
          <div className={styles.fileInfo}>
            <p>선택된 파일: {selectedFile.name}</p>
            <p>파일 크기: {(selectedFile.size / 1024).toFixed(2)} KB</p>
          </div>
        )}

        {previewUrl && (
          <div className={styles.previewContainer}>
            <img src={previewUrl} alt="미리보기" className={styles.preview} />
          </div>
        )}

        <div className={styles.buttonGroup}>
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isPending}
            className={styles.uploadButton}
          >
            {isPending ? "분석 중..." : "분석 시작"}
          </button>
          {selectedFile && (
            <button onClick={handleReset} className={styles.resetButton}>
              초기화
            </button>
          )}
        </div>
      </div>

      {analysisResult && (
        <div className={styles.resultSection}>
          <h2 className={styles.resultTitle}>분석 결과</h2>
          <div className={styles.resultGrid}>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>멀티콥터 본체:</span>
              <span className={styles.resultValue}>
                {analysisResult.multicopterBodyCount}개
              </span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>프로펠러:</span>
              <span className={styles.resultValue}>
                {analysisResult.propellerCount}개
              </span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>카메라:</span>
              <span className={styles.resultValue}>
                {analysisResult.cameraCount}개
              </span>
            </div>
            <div className={styles.resultItem}>
              <span className={styles.resultLabel}>다리:</span>
              <span className={styles.resultValue}>
                {analysisResult.legCount}개
              </span>
            </div>
          </div>
          <div className={styles.analysisText}>
            <p>{analysisResult.analysisResult}</p>
          </div>
          {analysisResult.segmentedImageUrl && (
            <div className={styles.segmentedImageContainer}>
              <h3 className={styles.segmentedTitle}>분할된 이미지</h3>
              <img
                src={analysisResult.segmentedImageUrl}
                alt="분할된 이미지"
                className={styles.segmentedImage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
