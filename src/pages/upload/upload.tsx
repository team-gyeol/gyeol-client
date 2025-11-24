import { useState } from "react";

import {
  useAnalyzeImage,
  useAnalyzeMultipleImages,
} from "@shared/apis/domain/image";
import Layout from "@shared/components/layout/layout";

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

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length !== files.length) {
      alert("이미지 파일만 업로드 가능합니다.");
    }

    if (imageFiles.length === 0) return;

    setSelectedFiles(imageFiles);

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
      analyzeMultipleImages(
        { images: selectedFiles },
        {
          onError: () => {
            alert("이미지 분석에 실패했습니다.");
          },
        },
      );
    } else {
      analyzeImage(
        { image: selectedFiles[0] },
        {
          onError: () => {
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
    <Layout>
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

          {previewUrls.length > 0 ? (
            <div
              className={
                isMultipleMode ? styles.previewGrid : styles.previewContainer
              }
            >
              {previewUrls.map((url, index) => (
                <div key={index} className={styles.previewItem}>
                  <img
                    src={url}
                    alt={`미리보기 ${index + 1}`}
                    className={styles.preview}
                  />
                  {isMultipleMode && (
                    <p className={styles.previewFileName}>
                      {selectedFiles[index]?.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={
                isMultipleMode ? styles.previewGrid : styles.previewContainer
              }
            >
              <div className={styles.previewPlaceholder}>
                <p className={styles.placeholderText}>이미지를 넣어주세요</p>
              </div>
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

        {(singleAnalysisResult || multipleAnalysisResults) && (
          <div className={styles.evaluationSection}>
            <h2 className={styles.resultTitle}>인공지능 모델 평가 지표</h2>

            <div className={styles.evaluationItem}>
              <h3 className={styles.evaluationTitle}>
                AP 지표 (Average Precision)
              </h3>
              <img
                src="/evaluation1.png"
                alt="AP 지표"
                className={styles.evaluationImage}
              />
              <div className={styles.evaluationDescription}>
                <ul className={styles.evaluationList}>
                  <li>
                    <strong>AP@[0.50:0.95] = 0.631</strong>
                    <br />
                    전반적인 IoU 구간에서 중간 수준의 분할 성능을 보임
                  </li>
                  <li>
                    <strong>AP@0.50 = 0.927</strong>
                    <br />
                    대부분의 다리 영역을 잘 찾아 높은 정확도 달성
                  </li>
                  <li>
                    <strong>AP@0.75 = 0.739</strong>
                    <br />
                    IoU 0.75 조건에서도 높은 정확도로 세부 윤곽까지 비교적
                    정확하게 분할
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.evaluationItem}>
              <h3 className={styles.evaluationTitle}>
                PR Curve (Precision-Recall Curve)
              </h3>
              <img
                src="/evaluation3.png"
                alt="PR Curve"
                className={styles.evaluationImage}
              />
              <div className={styles.evaluationDescription}>
                <ul className={styles.evaluationList}>
                  <li>
                    <strong>곡선이 Precision≈1을 유지하며 Recall이 증가</strong>
                    <br />
                    임계값을 낮춰 더 많은 객체를 잡아도 오탐이 거의 없음
                  </li>
                  <li>
                    <strong>
                      곡선 후반(Recall 0.9 이후)에서 Precision이 떨어지는 구간
                    </strong>
                    <br />
                    모든 객체를 찾으려 할 때 일부 오탐이 생겨 Precision이 감소
                  </li>
                  <li>
                    <strong>전체적으로 PR 곡선이 우상단에 치우쳐 있음</strong>
                    <br />
                    IoU 0.50 기준에서는 높은 정밀도와 재현율을 모두 확보한 강한
                    모델 성능을 보여줌
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.evaluationItem}>
              <h3 className={styles.evaluationTitle}>
                AP vs IoU (Average Precision vs Intersection over Union)
              </h3>
              <img
                src="/evaluation2.png"
                alt="AP vs IoU"
                className={styles.evaluationImage}
              />
              <div className={styles.evaluationDescription}>
                <p className={styles.evaluationText}>
                  IoU 임계값이 0.50에서 0.70 사이일 때는 AP가 0.69~0.77로 비교적
                  안정적으로 유지되지만, IoU가 0.75 이상으로 높아질수록 AP가
                  급격히 감소하여 IoU 0.95에서는 거의 0에 근접
                </p>
                <p className={styles.evaluationText}>
                  이러한 곡선 형태는 모델이 예측한 바운딩 박스와 실제 객체의
                  위치가 완벽하게 일치해야 하는 고정밀 IoU 조건에서는 성능이
                  크게 저하됨 이는 객체 탐지 모델이 일반적으로 중간 수준의
                  IoU(0.50~0.75)에서는 우수한 성능을 보이지만, 매우 엄격한 위치
                  정확도가 요구되는 상황에서는 한계를 보임
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Upload;
