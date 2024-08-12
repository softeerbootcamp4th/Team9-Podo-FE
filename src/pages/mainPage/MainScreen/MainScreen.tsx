import React, { useEffect, useRef, useState } from "react";
import EventSelectSection from "./EventSelectSection";
import GlowBackground from "../../../components/common/GlowBackground/GlowBackground";
import FCFSEventSection from "./FCFSEventSection";
import RandomEventSection from "./RandomEventSection";
import mainCar from "../../../assets/images/mainCar.png";

const MainScreen = () => {
  const FCFSRef = useRef<HTMLDivElement>(null);
  const RandomRef = useRef<HTMLDivElement>(null);
  const SectionRef = useRef<HTMLDivElement>(null);

  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState({
    fcfs: false,
    random: false,
  });

  const onFCFSClick = () => {
    FCFSRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onRandomClick = () => {
    RandomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fadeElements = [FCFSRef.current, RandomRef.current];
    const sectionElement = SectionRef.current;

    const sectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (target === FCFSRef.current) {
          setIsSectionVisible((prev) => ({
            ...prev,
            fcfs: entry.isIntersecting,
          }));
        } else if (target === RandomRef.current) {
          setIsSectionVisible((prev) => ({
            ...prev,
            random: entry.isIntersecting,
          }));
        }
      });
    };

    const imageVisibilityCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsImageVisible(entry.isIntersecting);
      });
    };

    const sectionObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const imageObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const sectionObserver = new IntersectionObserver(
      sectionObserverCallback,
      sectionObserverOptions,
    );
    const imageObserver = new IntersectionObserver(
      imageVisibilityCallback,
      imageObserverOptions,
    );

    fadeElements.forEach((element) => {
      if (element) {
        sectionObserver.observe(element);
      }
    });

    if (sectionElement) {
      imageObserver.observe(sectionElement);
    }

    //성능 저하의 원인이 될 수 있음..
    return () => {
      fadeElements.forEach((element) => {
        if (element) {
          sectionObserver.unobserve(element);
        }
      });

      if (sectionElement) {
        imageObserver.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <>
      <GlowBackground />
      <EventSelectSection
        onFCFSClick={onFCFSClick}
        onRandomClick={onRandomClick}
      />
      <img
        src={mainCar}
        alt=""
        className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isImageVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div ref={SectionRef}>
        <FCFSEventSection ref={FCFSRef}></FCFSEventSection>
        <RandomEventSection ref={RandomRef}></RandomEventSection>
      </div>
    </>
  );
};

export default MainScreen;
