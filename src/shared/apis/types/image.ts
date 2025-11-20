export interface ImageAnalyzeRequest {
  image: File;
}

export interface ImageAnalyzeResponse {
  multicopterBodyCount: number;
  propellerCount: number;
  cameraCount: number;
  legCount: number;
  analysisResult: string;
  segmentedImageUrl: string;
}

export interface ImageAnalyzeMultipleRequest {
  images: File[];
}

export interface ImageAnalyzeMultipleResponse {
  results: ImageAnalyzeResponse[];
}

