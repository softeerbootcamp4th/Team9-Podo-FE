import React, { ReactElement, useEffect, useRef, useState } from "react";

interface CarouselProps {
  items: ReactElement[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            setSelectedIndex(index);
          }
        });
      },
      {
        threshold: 0.7,
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex snap-x snap-mandatory justify-start gap-800 overflow-scroll scroll-smooth px-32">
      {items &&
        items.map((item, index) => {
          return (
            <div
              key={item.key}
              onClick={(event) => {
                const index = itemRefs.current.indexOf(
                  event.currentTarget as HTMLDivElement,
                );
                const targetElement = itemRefs.current[index];

                if (targetElement) {
                  const carouselContainer = targetElement.parentElement;

                  if (carouselContainer) {
                    const targetPosition =
                      targetElement.offsetLeft - carouselContainer.offsetLeft;

                    carouselContainer.scrollTo({
                      top: 0,
                      left: targetPosition,
                      behavior: "smooth",
                    });

                    setSelectedIndex(index);
                  }
                }
              }}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex-shrink-0 ${index === selectedIndex ? "opacity-100" : "opacity-30"} snap-center transition-opacity`}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};

export default Carousel;
