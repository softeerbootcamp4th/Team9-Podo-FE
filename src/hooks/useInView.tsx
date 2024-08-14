import { useEffect, useRef, useState } from "react";

/**
 * 훅을 사용하는 컴포넌트가 랜더링 될 때 ref에 옵저버 등록
 * 사용자 뷰에 threshold만큼 ref요소가 들어오면 isInView true 리턴
 * @param {number} threshold 임계점
 * @returns { isInView, divRef }
 * @example
 * const ExampleComponent = () => {
 *   const { isInView, divRef } = useInView<HTMLDivElement>(0.5);
 *   return <div ref={divRef}>{isInView ? "In view" : "Out of view"}</div>;
 * };
 */
const useInView = <T extends Element>(threshold: number) => {
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else if (entry.intersectionRect.top !== 0) {
            setIsInView(false);
          }
        });
      },
      { threshold },
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [threshold]);

  return { isInView, divRef };
};

export default useInView;
