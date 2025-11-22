import { useEffect, useRef, useState } from "react";

export const useScrollDarkHeader = () => {
  const [darkHeader, setDarkHeader] = useState(false);

  const responsibilityRef = useRef<HTMLDivElement | null>(null);
  const labelingRef = useRef<HTMLDivElement | null>(null);
  const accuracyRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targets = [
      responsibilityRef.current,
      labelingRef.current,
      accuracyRef.current,
      teamRef.current,
      footerRef.current,
    ].filter((el): el is HTMLDivElement => el !== null);

    if (targets.length === 0) return;

    const visibleMap = new Map<Element, boolean>();
    targets.forEach((target) => visibleMap.set(target, false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap.set(entry.target, entry.isIntersecting);
        });

        const isDarkSectionVisible = Array.from(visibleMap.values()).some(
          (isVisible) => isVisible,
        );

        setDarkHeader(isDarkSectionVisible);
      },
      {
        threshold: 0.5,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return {
    darkHeader,
    responsibilityRef,
    labelingRef,
    accuracyRef,
    teamRef,
    footerRef,
  };
};
