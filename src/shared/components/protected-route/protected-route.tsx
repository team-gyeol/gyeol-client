import { useEffect, useRef, useState } from "react";
import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import { tokenService } from "@shared/auth/token-service";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const hasShownAlert = useRef(false);
  const [isChecking, setIsChecking] = useState(true);

  const isLoggedIn = tokenService.hasToken();

  useEffect(() => {
    if (!isLoggedIn && !hasShownAlert.current) {
      hasShownAlert.current = true;
      alert("올바르지 않는 접근입니다. 로그인 해주세요");
      // alert 확인 후 리다이렉트
      navigate(routePath.LOGIN, { replace: true });
    } else if (isLoggedIn) {
      setIsChecking(false);
    }
  }, [isLoggedIn, navigate]);

  if (isChecking || !isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};
