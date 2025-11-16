import { useEffect, useRef, useState } from "react";
import { routePath } from "@router/path";
import { useNavigate } from "react-router-dom";

import Layout from "@shared/components/layout/layout";

import Accuracy from "./components/accuracy/accuracy";
import Labeling from "./components/labeling/labeling";
import Start from "./components/start/start";
import Team from "./components/team/team";

const Home = () => {
  const [darkHeader, setDarkHeader] = useState(false);
  const labelingRef = useRef<HTMLDivElement | null>(null);
  const accuracyRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const targets = [
      labelingRef.current,
      accuracyRef.current,
      teamRef.current,
    ].filter((el): el is HTMLDivElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 3개 섹션 중 하나라도 화면에 절반 이상 보이면 darkHeader = true
        const isDarkSectionVisible = entries.some(
          (entry) => entry.isIntersecting,
        );
        setDarkHeader(isDarkSectionVisible);
      },
      { threshold: 0.5 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Layout darkHeader={darkHeader}>
        <Start onClick={() => navigate(routePath.UPLOAD)} />
        <Labeling ref={labelingRef} />
        <Accuracy ref={accuracyRef} />
        <Team ref={teamRef} />
      </Layout>
    </>
  );
};

export default Home;
