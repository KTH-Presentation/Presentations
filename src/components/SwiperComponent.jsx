import { useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
import { Scrollbar, Pagination, Keyboard, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ children }) => {
  const swiperRef = useRef(null);

  // (Valfritt) Ctrl+Tab / Ctrl+Shift+Tab för att byta slide utan att sabotera vanlig Tab-fokus
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!swiperRef.current) return;

      // Låt användaren skriva i inputs utan att vi byter slide
      const tag = document.activeElement?.tagName?.toLowerCase();
      const isTyping =
        tag === "input" || tag === "textarea" || document.activeElement?.isContentEditable;

      if (isTyping) return;

      if (e.ctrlKey && e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) swiperRef.current.slidePrev();
        else swiperRef.current.slideNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Swiper
      modules={[Pagination, Scrollbar, Keyboard, Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      a11y={{ enabled: true }}
      className="w-full h-screen"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
