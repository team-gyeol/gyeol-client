import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 페이지 전환 시 스크롤을 맨 위로 이동시키는 컴포넌트
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

