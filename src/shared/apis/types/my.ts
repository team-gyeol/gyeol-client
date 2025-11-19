export interface UserResponse {
  userName: string;
  userEmail: string;
  userPicture: string;
}

export interface ImageResponse {
  id: number;
  originalImageUrl: string;
  segmentedImageUrl: string;
  analysisResult: string;
  createdAt: string;
}
