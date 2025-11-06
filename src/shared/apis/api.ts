import axios from 'axios';

// Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // BASE_URL 설정
});
